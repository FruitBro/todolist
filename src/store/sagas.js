import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'
import mockAdapter from 'axios-mock-adapter'
const mock = new mockAdapter(axios)
mock.onGet('/list.json').reply(200, {
    data: [
        "1",
        "hello",
        "world"
    ]
})


function* getInitList() {
    // 防止异常情况
    try {
        const res = yield axios.get("/list.json")
        const data = res.data.data;
        const action = initListAction(data)
        yield put(action)
    } catch (e) {
        console.log('list.json 请求失败')
    }
}
// takeEvery 捕捉每一个action
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga
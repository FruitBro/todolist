import { CHANGE_INPUT_VALUE, ADD_TOTO_ITEM, DELETE_TODO_ITEM} from './actionTypes'
// state 对应的就是整个store存储的数据。也就是整个图书馆的借阅信息
const defaultState = {
    inputValue: '',
    list: []
}

// reducer 可以接收state,但是绝不能修改state
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    if (action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TOTO_ITEM) {
        // 将inputValue添加到list中
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type = DELETE_TODO_ITEM) {
       newState.list.splice(action.index, 1)
       return newState
    }
    console.log(state, action)
    return state
}
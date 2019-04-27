import {
  CHANGE_INPUT_VALUE,
  ADD_TOTO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from "./actionTypes";
import axios from 'axios'
import mockAdapter from 'axios-mock-adapter'
const mock = new mockAdapter(axios)
mock.onGet('/list.json').reply(200, {
    data: [
        "1",
        "hello"
    ]
})

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
export const getAddItemAction = () => ({
  type: ADD_TOTO_ITEM
});
export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get("/list.json").then(res => {
      const data = res.data.data;
      const action = initListAction(data)
      dispatch(action);
      console.log("res", data);
    });
  };
};

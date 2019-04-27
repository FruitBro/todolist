import {
  CHANGE_INPUT_VALUE,
  ADD_TOTO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from "./actionTypes";
// state 对应的就是整个store存储的数据。也就是整个图书馆的借阅信息
const defaultState = {
  inputValue: "",
  list: []
};

// reducer 可以接收state,但是绝不能修改state
// 纯函数：固定输入--》固定输出，而且没有副作用（函数中有setTimeout、ajax、new Date等时，就都不是纯函数了，reducer中不能有这些操作）
// 副作用：比如对传入参数的修改
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TOTO_ITEM) {
    // 将inputValue添加到list中
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === INIT_LIST_ACTION) {
    newState.list = action.data;
    return newState;
  }
  return state;
};

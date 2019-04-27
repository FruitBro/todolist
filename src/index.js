import React from 'react';
import ReactDOM from 'react-dom';
// all in js
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'
// Provider: 提供器连接了store，那么Provider里面的所有组件都有能力获取到store里的内容
const App = (
    <Provider store={store}>
      <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

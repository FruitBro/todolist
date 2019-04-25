import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import axios from "axios"
import "./style.css";
class TodoList extends Component {
  constructor(props) {
    super(props)
    //  当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    console.log('render')
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          {/* 下面是一个input框 */}
          <input
            id="insertArea"
            type="text"
            className="input"
            onChange={this.handleInputChange}
            value={this.state.inputValue}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  componentDidMount () {
    axios.get('/api/todolist').then(() => {
      alert('succ')
    }).catch(() => {
      alert('error')
    })

  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
          <TodoItem
            key={index}
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
      )
    })

  }

  handleInputChange(e) {
    // console.log(e.target)
    const value = e.target.value
    this.setState(() => ({
        inputValue: value
    }))
  }

  handleBtnClick() {
    // prevState 代表修改之前的数据
    this.setState((prevState)=>({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }))
    
  }

  handleItemDelete(index) {
    // immutable
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
}

export default TodoList;

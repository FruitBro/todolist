import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
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

  componentWillMount () {
    console.log('componentWillMount')
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
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
  componentDidMount () {
    console.log('componentDidMount')
  }

  // 组件被更新之前，它会自动执行 
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }
  // 组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后执行
  // 如果shouldComponentUpdate 返回true就执行，false就不执行
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  // 组件更新完成之后，会执行
  componentDidUpdate () {
    console.log('componentDidUpdate')
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
    const value = this.input.value
    this.setState(() => ({
        inputValue: value
    }))
  }

  handleBtnClick() {
    // prevState 代表修改之前的数据
    this.setState((prevState)=>({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }), () => {
      console.log(this.ul.querySelectorAll('div').length)
    })
    
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

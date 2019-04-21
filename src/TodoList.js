import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
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
          {this.state.list.map((item, index) => {
            return (
              <div>
                <TodoItem
                  content={item}
                  index={index}
                  deleteItem={this.handleItemDelete}
                />

                {/* <li 
                    key={index} 
                    onClick={this.handleItemDelete.bind(this, index)}
                    dangerouslySetInnerHTML={{__html: item}}
                    >
                </li> */}
              </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何改变
    console.log(index);
    const list = [...this.state.list]; // 先拷贝出来
    list.splice(index, 1);

    this.setState({
      list: list
    });
  }
}

export default TodoList;

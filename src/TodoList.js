import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          <input type="text" 
            onChange={this.handleInputChange} 
            value={this.state.inputValue}/>
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li 
                  key={index} 
                  onClick={this.handleItemDelete}
                  >
                    {item}
                  </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete (e, index) {
    // immutable
    // state 不允许我们做任何改变
    const list = [...this.state.list] // 先拷贝出来
    list.splice(index, 1)

    this.setState({
      list: list
    })

  }
}

export default TodoList
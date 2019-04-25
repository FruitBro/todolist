import React, { Component } from "react";
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content, test } = this.props
    return <div onClick={this.handleClick}>{test} - {content}</div>;
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
  // 一个组件要从父组件接受参数
  // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps () {
    console.log("componentWillReceiveProps")
  }
  // 当这个组件即将被从页面中剔除的时候，会被执行
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
}
// 参数校验
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 可以是字符串或数字
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
// 默认值
TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem

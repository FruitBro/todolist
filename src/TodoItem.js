import React, { Component } from "react";
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log(nextProps, nextState)
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
    
  }
  render() {
    const { content } = this.props
    return <div onClick={this.handleClick}>{content}</div>;
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

}
// 参数校验
TodoItem.propTypes = {
  // test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 可以是字符串或数字
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
// 默认值
// TodoItem.defaultProps = {
//   test: 'hello world'
// }

export default TodoItem

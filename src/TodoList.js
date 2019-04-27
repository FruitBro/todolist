import React, { Component } from 'react'
import store from './store'
import { connect } from 'react-redux'

class TodoList extends Component {
    // constructor (props) {
    //     super(props)
    //     this.state = store.getState()

    // }

    render () {
        return (
            <div>
                <div>
                    <input 
                      type="text"
                      value={this.props.inputValue}
                      onChange={this.props.changeInputValue}
                      />
                    <button>提交</button>
                </div>
                <ul>
                    <li>Fruit</li>
                </ul>
            </div>
        )
    }
}
// state指的是store中的数据
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue

    }
}
// 也就是store.dispatch,映射到了 props
const mapDispathcToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}
// connect(null, null)(TodoList)意思是让TodoList和store做连接,mapStateToProps是做连接的规则
export default connect(mapStateToProps, mapDispathcToProps)(TodoList)
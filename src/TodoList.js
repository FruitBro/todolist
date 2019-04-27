import React, { Component } from 'react'
import store from './store'
import { connect } from 'react-redux'
// 改为无状态组件，可以有效提升代码性能，无生命周期函数，也不会生成组件的实例
const TodoList = (props) => {
    const { inputValue, changeInputValue, handleClick, list, handleDelete} = props
    return (
        <div>
            <div>
                <input 
                  type="text"
                  value={inputValue}
                  onChange={changeInputValue}
                  />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={() => {handleDelete(index)}} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
// class TodoList extends Component {
//     // constructor (props) {
//     //     super(props)
//     //     this.state = store.getState()

//     // }

//     render () {
       
//     }
// }
// state指的是store中的数据
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list

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
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        handleDelete(index) {
            console.log('index',index)
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}
// connect(null, null)(TodoList)意思是让TodoList和store做连接,mapStateToProps是做连接的规则
// connect实际返回的是容器组件
export default connect(mapStateToProps, mapDispathcToProps)(TodoList)
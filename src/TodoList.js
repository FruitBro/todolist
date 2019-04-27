import React, { Component } from 'react'
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
// state指的是store中的数据，感觉类似于subscribe，都是映射关系
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue, // 将数据从父组件的映射到了本组件的props中
        list: state.list

    }
}
// 也就是store.dispatch,映射到了 props
const mapDispatchToProps = (dispatch) => {
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
// 当用connect将UI组件和一些数据和业务逻辑相结合的时候，实际返回的就是容器组件（相当于对UI组件的包装）
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
/**
 * 1. 用connect将我的组件todolist和store进行连接，怎么做连接？
 * 2. 怎么做连接？连接方式 mapStateToProps，此函数写法固定，state指的是store中的数据，映射到本组件的props中，就这可以直接使用this.props，多写几遍
 * 3. 数据流向 从Provider的store到其中的组件connect
 * 4. mapDispatchToProps 接收dispatch方法，改变store中的内容。dispatch派发action给store，store转发给reducer
 * 5. 只需要connect方法就可以自动的把这个组件结合这两个规则mapStateToProps、mapDispatchToProps和store做连接
 * 多写几遍就熟悉了，都是相同的套路
 * 
 * mapDispatchToProps使props中的方法能够调用dispatch,去操作store中的数据
 * 列表循环的时候一定要给个key值
 * 
 * 数据变页面就会跟着变，subscribe就不用写了
 *  */

import React, { Component } from 'react'
import 'antd/dist/antd.css'

import store from './store/index'
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class Todolist extends Component {
    constructor (props) {
        super(props)
        // 先获取一次store的值
        this.state = store.getState()
        console.log(this.state)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render () {
        return  (
        <TodoListUI 
          inputValue={this.state.inputValue}
          list={this.state.list}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleItemDelete={this.handleItemDelete} />
        )
    }

    componentDidMount () {

        const action = getInitList()
        store.dispatch(action)


        
        
    }

    handleInputChange (e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange () {
        // 重新拉取store中的数据
        this.setState(store.getState())
    }

    handleSubmit () {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        console.log(index)
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}

export default Todolist
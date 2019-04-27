import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'


class Todolist extends Component {
    constructor (props) {
        super(props)
        // 先获取一次store的值
        this.state = store.getState()
        console.log(this.state)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render () {
        return (
            <div style={{marginTop: '10px',marginLeft: '10px'}}>
                <Input 
                  value={this.state.inputValue} 
                  placeholder="todo info" 
                  style={{width:'300px',marginRight: '10px'}}
                  onChange={this.handleInputChange}
                  />
                <Button onClick={this.handleSubmit} type="primary">提交</Button>
            
            <div>Hello world</div>
            <List
                style={{marginTop: '10px'}}
                bordered
                dataSource={this.state.list}
                renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}> {item}</List.Item>)}
            />
            </div>
        )
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
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}

export default Todolist
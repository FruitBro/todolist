import React from 'react'
import { Input, Button, List } from 'antd'

// 当组件中之后render的时候就可以构建一个无状态组件了
const TodoListUI = (props) => {
    return (
         <div style={{marginTop: '10px',marginLeft: '10px'}}>
            <Input 
            value={props.inputValue} 
            placeholder="todo info" 
            style={{width:'300px',marginRight: '10px'}}
            onChange={props.handleInputChange}
            />
            <Button onClick={props.handleSubmit} type="primary">提交</Button>
        
            <div>Hello world</div>
            <List
                style={{marginTop: '10px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}> {item}</List.Item>)}
            />
            </div>
    )
}

// 下面这个普通组件，类，生命周期函数，render 执行的函数远比无状态组件这个函数要多，因此性能要差很多

export default TodoListUI
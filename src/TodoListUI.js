import React, { Component } from 'react';
import ToDoItem from './ToDoItem.js';
import { Input  } from 'antd';
import { Row, Col, Divider } from 'antd';
import { List } from 'antd';

const { Search } = Input;

//无状态组件  优点：性能高   
const TodoListUI = (props) =>{
	return (
		<div className="App">
	        <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}>
	          ToDoList
	        </Divider>
	        <Row justify="center">
	          <Col span={16}>
	            <Search
	              placeholder="input search text"
	              enterButton="Add"
	              size="large"
	              onSearch={props.handleclick}
	              onChange = {props.handleChange}
	              value = {props.inputvalue}
	            />
	          </Col>
	        </Row>
	        <Row justify="center">
	          <Col span={16}>
	          <List
	            size="small"
	            bordered
	            dataSource={props.list}
	            renderItem={(item,index) => <ToDoItem item={item} index={index} itemclick={props.itemclick}/>}
	          />
	          </Col>
	        </Row>
	    </div>
		)
}

export default TodoListUI;
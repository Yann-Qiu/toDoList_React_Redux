import React, { Component } from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import { List } from 'antd';

class ToDoItem extends Component {
	constructor(props){
		super(props);
		this.itemdelete=this.itemdelete.bind(this)
	}

	render(){
		return (
			<List.Item onClick={this.itemdelete} style={{textAlign : 'left'}}>
				<PlusSquareOutlined />
				{this.props.item}
			</List.Item>
			)
	}
	itemdelete(index){
		this.props.itemclick(this.props.index);
	}
}

export default ToDoItem;
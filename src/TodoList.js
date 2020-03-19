import React, { Component } from 'react';
import axios from 'axios';
import store from './store/index.js';
import TodoListUI from './TodoListUI.js';
import './app.css';
import { getInputChangeAction,getAddItemAction,getItemClickAction,initData,getTodolist,get_init_list } from './store/actionCreators.js';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleclick = this.handleclick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.itemclick = this.itemclick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  // //普通，不使用中间组件的写法
  // componentDidMount(){
  //   axios.get('https://yanfengqiu.s3.eu-west-3.amazonaws.com/todolist.json')
  //   .then((res)=>{
  //     const action = initData(res.data);
  //     store.dispatch(action);
  //   })
  //   .catch((err)=>{console.error(err)})
  // }


  //  //使用redux-thunk的方法,
  //    action通常为返回一个对象，只有使用了thunk中间件才能返回一个函数,  返回函数的参数可以自动接收到dispatch方法
  // componentDidMount(){
  //   const action = getTodolist();
  //   store.dispatch(action);
  // }

  //   //使用redux-saga的方法，不光reducer可以接收到action, saga.js里的takeEvery方法也可以接收到
  componentDidMount(){
    const action = get_init_list();
    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState());
  }

  handleclick(){
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleChange(e){
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  itemclick(index){
    const action = getItemClickAction(index);
    store.dispatch(action);
  }

  render(){
    return  (
      <TodoListUI 
        inputvalue={this.state.inputvalue}
        handleChange={this.handleChange}
        handleclick={this.handleclick}
        list={this.state.list}
        itemclick={this.itemclick}
      />
    );
  }

}

export default TodoList;

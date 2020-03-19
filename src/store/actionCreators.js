import { ADD_ITEM_TO_LIST,CHANGE_INPUT_VALUE,DELETE_ITEM,INIT_DATA,GET_INIT_LIST  } from './actionTypes.js';
import axios from 'axios';

export const getInputChangeAction = (value) =>({
	type: CHANGE_INPUT_VALUE,
	value
})

export const getAddItemAction = () =>({
	type: ADD_ITEM_TO_LIST
})

export const getItemClickAction = (index) =>{
	return {
	type: DELETE_ITEM,
	index
	}
}

export const initData = (data) =>{
	return {
	type: INIT_DATA,
	data : data
	}
}

//通常为返回一个对象，只有使用了thunk中间件才能返回一个函数,  返回函数的参数可以自动接收到dispatch方法
export const getTodolist = (data) =>{
	return (dispatch) => {
	axios.get('https://yanfengqiu.s3.eu-west-3.amazonaws.com/todolist.json')
     .then((res)=>{
       const action = initData(res.data);
       dispatch(action);
     })
     .catch((err)=>{console.error(err)})
	}
}

export const get_init_list = (data) =>{
	return {
		type : GET_INIT_LIST
	}
}
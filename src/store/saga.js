import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes.js';
import axios from 'axios';
import { initData } from './actionCreators.js';

function* getInitList(){
	try {
		const res =  yield axios.get('https://yanfengqiu.s3.eu-west-3.amazonaws.com/todolist.json');
		const action = initData(res.data);
		yield put(action); //代替store派发action给reducer
	}
	catch(e){
		console.log('list.json request failed');	
	}
}


//saga中一定要导出这个generator函数
function* saga(){
	yield takeEvery(GET_INIT_LIST, getInitList);
}

export default saga;
import { ADD_ITEM_TO_LIST,CHANGE_INPUT_VALUE,DELETE_ITEM,INIT_DATA } from './actionTypes.js'

const defaultState = {
	inputvalue : "",
	list : []
}


//reducer可以接收state但是绝不能修改state
export default (prevstate = defaultState,action)=>{
	if(action.type === CHANGE_INPUT_VALUE){
		const newState = JSON.parse(JSON.stringify(prevstate));
		newState.inputvalue = action.value;
		return newState;
	}
	else if( action.type === ADD_ITEM_TO_LIST){
		const newstate = JSON.parse(JSON.stringify(prevstate));
		newstate.list.push(newstate.inputvalue);
		newstate.inputvalue = '';
		return newstate;
	}
	if( action.type === DELETE_ITEM){
		const newstate = JSON.parse(JSON.stringify(prevstate));
		newstate.list.splice(action.index,1);
		return newstate;
	}
	if( action.type === INIT_DATA){
		const newstate = JSON.parse(JSON.stringify(prevstate));
		newstate.list = action.data;
		return newstate;
	}
	return prevstate;
}
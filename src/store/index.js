import { createStore,applyMiddleware } from 'redux';
import reducer from './reducer.js';
import  createSagaMiddleware  from 'redux-saga';
import saga from './saga.js';
// import thunk from 'redux-thunk';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
	);

sagaMiddleware.run(saga);

export default store;
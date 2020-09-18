import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../reducers/index';

const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, middleWare);
export default store;

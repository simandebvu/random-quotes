import { combineReducers } from 'redux';
import { quotesReducer } from './quotes';

export const reducers = combineReducers({
  Quote: quotesReducer,
});

export default reducers;

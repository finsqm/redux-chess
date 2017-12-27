import { combineReducers } from 'redux';
import boardReducer from './board';

export default combineReducers({ board: boardReducer });

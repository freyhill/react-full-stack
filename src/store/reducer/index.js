/********************
 * @file:combineReducers
 * @author: leinov
 * @date: 2020-05
 ********************/
import {combineReducers} from 'redux';
import {userInfoReducer} from './userInfoReducer';

export default combineReducers({
    userInfoReducer,
})
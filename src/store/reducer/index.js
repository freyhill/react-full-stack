/********************
 * @file:combineReducers
 * @author: leinov
 * @date: 2020-05
 ********************/
import {combineReducers} from 'redux';
import {userInfoReducer} from './userInfoReducer';
import {studentReducer} from './studentReducer';
export default combineReducers({
    userInfoReducer,
    studentReducer
})
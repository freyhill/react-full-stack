/********************
 * @file:combineReducers
 * @author: leinov
 * @date: 2020-05
 ********************/
import {combineReducers} from 'redux';
import {studentReducer} from './studentReducer';
import {courseReducer} from './courseReducer'

export default combineReducers({
    studentReducer,
    courseReducer
})
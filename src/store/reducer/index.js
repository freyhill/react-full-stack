/********************
 * @file:reducer main js
 * @author: leinov
 * @date: 2019-03-03
 ********************/
import {combineReducers} from "redux";
import movieList from "./movieReducer";
const reducers = combineReducers({
	movieList
});
export default reducers;

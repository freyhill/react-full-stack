 /********************
  * @file:movie action
  * @author: leinov
  * @date: 2019-03-03
  ********************/
 import {
 	ADD_MOVIE,
 	SHOW_MOVIE,
 	ALTER_MOVIE,
 	DELET_MOVIE,
 } from "../actionTypes";

 import http from 'src/utils/http'

 export const showAction = (newData) => ({
 	type: SHOW_MOVIE,
 	payload: newData
 });

 export const addAction = (newData) => ({
 	type: ADD_MOVIE,
 	payload: newData
 });
 export const alterAction = (newData) => ({
 	type: ALTER_MOVIE,
 	payload: newData
 })
 export const deleteAction = (newdata) => ({
 	type: DELET_MOVIE,
 	payload: newdata
 });

 // 异步增删查数据
 export const movieData = (req, action) => (dispatch, getState) => {
 	http.request(req).then((data) => {
 		dispatch(action(data));
 	})
 }

 // 异步修改数据
 export const movieAlterData = (req, action) => (dispatch, getState) => {
	http.request(req).then((data) => {
		console.log("data",data);
		const movieList = getState().movieList;
		const newData = movieList.map((item)=>{
			if(item.id == data.id){
				item.title = data.title;
			}
			return item;
		})
		dispatch(action(newData));
	})
}
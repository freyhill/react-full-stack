/********************
 * @file: movie reducer 
 * @author: leinov
 * @date: 2019-03-03
 ********************/
import {
	ADD_MOVIE,
	SHOW_MOVIE,
	ALTER_MOVIE,
	DELET_MOVIE
} from "../actionTypes";
let initState = []

const movieList = (state = initState, action) => {
	switch (action.type) {
		case ADD_MOVIE:
			return [...state, action.payload];
		case SHOW_MOVIE:
			return action.payload;
		case ALTER_MOVIE:
			return action.payload;

		case DELET_MOVIE:
			return action.payload;
		default:
			return state;
	}
};

export default movieList
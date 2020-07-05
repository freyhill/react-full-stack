
import {STUDENT_LIST_DATA} from '../actions/actionTypes';
const initState = {
    studentList : []
}

export function studentReducer(state = initState, action) {
    switch (action.type) {
        case STUDENT_LIST_DATA:
            return Object.assign({}, state, {studentList: action.newData})
        default:
            return state;
    }
}
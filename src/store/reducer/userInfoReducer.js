
import {BASE_USER_INFO} from '../actions/actionTypes';
const initState = {
    baseInfo: {
        name: 'leinov'
    }
}

export function userInfoReducer(state = initState, action) {
    switch (action.type) {
        case BASE_USER_INFO:
            return Object.assign({}, state, {baseInfo: action.newData})
        default:
            return state;
    }
}
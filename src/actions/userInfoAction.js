import {get, put} from '../api/index';
import {BASE_USER_INFO} from './actionTypes';

export function setUserInfoAction (newData) {
    return {
        type: BASE_USER_INFO,
        newData
    }
}

export function getUserInfoAction(url, data, action) {
    return (dispatch) => {
        get(url,data).then((res) => {
            dispatch(action(res));
        }).catch((err) => {
         
        })
    }
}

export function updateUserInfoAction(url, data, action) {
    return (dispatch) => {
        put(url,data).then((res) => {
            console.log(res);
            dispatch(action(res));
        }).catch((err) => {
         
        })
    }
}
import {get, post, put, del} from '../../api/index';
import {STUDENT_LIST_DATA} from './actionTypes';

export function setStudentListAction (newData) {
    return {
        type: STUDENT_LIST_DATA,
        newData
    }
}

// 获取学生列表
export function getStudentListAction(url, data, action) {
    return (dispatch) => {
        get(url,data).then((res) => {
            dispatch(action(res));
        }).catch((err) => {
         
        })
    }
}



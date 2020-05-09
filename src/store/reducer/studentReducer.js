/********************
 * @file:reducer
 * @author: leinov
 * @date: 2020-05
 ********************/

// initState
const initState = {
    student: [
        {id: '---', title: 'leinov'}
    ],
 }

// reducer function
export function studentReducer (state = initState, action) {
    switch (action.type) {
        case 'student':
            return {student: [...state.student, action.data]};
            default:
            return state;
    }
 }

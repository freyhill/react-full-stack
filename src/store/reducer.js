/********************
 * @file:reducer
 * @author: leinov
 * @date: 2020-05
 ********************/

// initState
const initState = {
    student: [],
    course: []
 }

// reducer function
export function reducers (state = initState, action) {
    console.log(state, action);
    switch (action.type) {
        case 'student':
            return {...state, ...{student: [...state.student, action.data]}};
        case 'course':
            return {...state, ...{course: [...state.course, action.data]}};
        default:
            return state;
    }
 }
 
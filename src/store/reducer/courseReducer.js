/********************
 * @file:reducer
 * @author: leinov
 * @date: 2020-05
 ********************/

// initState
const initState = {
    course: [],
 }


// reducer function
export function courseReducer (state = initState, action) {
    switch (action.type) {
        case 'course':
            return {course: [...state.course, action.data]}
            default:
            return state;
    }
 }

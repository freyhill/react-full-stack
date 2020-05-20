export const request = (url, condition, action,callback) => {
    return (dispatch) => {
        setTimeout(() => {
            let data = {
                id: + new Date(),
                title: Math.random()
            }
            console.log('studentAction', studentAction);
            dispatch(action(data));
            callback && callback(data);
        }, 100);        
    }
}

export const studentAction = (newData) => {
    return {
        type: 'student',
        data: newData
    }   
}
const ADD = 'ADD';

const action = {
    type: ADD
}

const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    };
}
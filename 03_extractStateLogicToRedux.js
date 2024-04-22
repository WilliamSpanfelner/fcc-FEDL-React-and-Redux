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

const messageReducer = (state=[], action) => {
    return action.type == ADD ? [...state, action.message] : state;
}

const store = Redux.createStore(messageReducer);

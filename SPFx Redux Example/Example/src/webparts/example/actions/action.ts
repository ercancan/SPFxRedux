const ADD = 'ADD';
const INCREMENT = 'INCREMENT';
const ADD_STUDENT = 'ADD_STUDENT';
const ADD_BOOK = 'ADD_BOOK';
 export const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    };
};

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const addStudent =(student) => {
    return {
        type: ADD_STUDENT,
        payload: student
    };
};

export const AddTodoAction = (text) =>   {
return {
    type: ADD_BOOK,
    text: text
 };
};
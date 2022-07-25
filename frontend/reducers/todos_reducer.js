import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false,
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true,
    }
};

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_TODOS: return (
            action.todos.reduce((accumulator, value, index) => {
                return {...accumulator, [value.id]: value}
            }, {})
        )
        case RECEIVE_TODO: return {
            ...state,
            [action.todo.id]:  action.todo
        }
        case REMOVE_TODO: 
            const next = {...state};
            delete next[action.id];
            return next;
        default: 
            return state;
    }
}

export default todosReducer
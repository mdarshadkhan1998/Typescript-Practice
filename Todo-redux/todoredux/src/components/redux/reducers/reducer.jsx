import { GET_TODO, ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actions/action";

const init = {
    TodoLength: 0,
    Todo: [],
    loading: false,
    error: false
}

const TodoReducer = (state = init, actions) => {
    switch (actions.type) {
        case GET_TODO: return { ...state, Todo: actions.payload};
        case ADD_TODO: return { ...state, Todo: [...state.Todo, actions.payload] };
        case EDIT_TODO: return { ...state, Todo: [...state.Todo, actions.payload] };
        case DELETE_TODO: return { ...state, Todo: state.Todo.filter((e) => e.id !== actions.payload) };
        default: return state
    }
}

export default TodoReducer;
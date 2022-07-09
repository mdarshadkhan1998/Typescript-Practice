import {ADD_TODO, EDIT_TODO, DELETE_TODO} from "./action";

const init = {
    TodoLength: 0,
    Todo: [],
    loading: false,
    error: false
}

const TodoReducer = (state=init, actions) => {
    switch(actions.type){
        case ADD_TODO: return {...state, Todo : [ ...state.Todo, actions.payload ]};
        case EDIT_TODO: return state;
        case DELETE_TODO: return state;
        default: return state
    }
} 

export default TodoReducer;
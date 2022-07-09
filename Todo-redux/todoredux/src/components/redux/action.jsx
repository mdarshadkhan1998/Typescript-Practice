export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addingTodo = (newTodo) => {
    return {
        type:ADD_TODO,
        payload: newTodo
    }
}
export const editingTodo = (editedTodo) => {
    return {
        type:EDIT_TODO,
        payload: editedTodo
    }
}
export const deletingTodo = (id) => {
    return {
        type:DELETE_TODO
    }
}
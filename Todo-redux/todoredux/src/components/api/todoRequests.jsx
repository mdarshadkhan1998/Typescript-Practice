import * as api from './api';
import  {fetchingTodo, addingTodo, editingTodo, deletingTodo} from '../redux/actions/action'

export const getTodo = () => async(dispatch) => {
        try{
            const { data } = await api.getReqst();
            dispatch(fetchingTodo(data));
        } catch (error) {
            console.log("eError in getTodo Part" + error);
        }
}

export const createNewTodo = (todoAdded) => async(dispatch) => {
        try{
            const td = {todo: todoAdded}
            const { data } = await api.postReqst(td);
            // console.log(data)

            dispatch(addingTodo(data));
        } catch (error) {
            console.log("eError in createNewTodo Part" + error);
        }
}

export const updateTodo = (id, updatedTodo) => async(dispatch) => {
        try{
            const { data } = await api.editedReqst(id, updatedTodo);
            dispatch(editingTodo(data));
        } catch (error) {
            console.log("eError in updateTodo Part" + error);
        }
}

export const deleteTodo = (id) => async(dispatch) => {
        try{
            await api.deleteReqst(id);
            dispatch(deletingTodo(id));
        } catch (error) {
            console.log("eError in updateTodo Part" + error);
        }
}
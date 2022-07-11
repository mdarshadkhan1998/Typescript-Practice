import axios from 'axios';

const url = 'http://localhost:8080/todostore'

export const getReqst = () => axios.get(url);
export const postReqst = (newTodo) => axios.post(url, newTodo);
export const editedReqst = (id, editedTodo) => axios.patch(`${url}/${id}`, editedTodo)
export const deleteReqst = (id) => axios.delete(`${url}/${id}`);
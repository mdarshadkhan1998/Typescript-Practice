import {legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import TodoReducer from "../reducers/reducer";
const store = createStore(TodoReducer, compose(applyMiddleware(thunk)))
export default store;
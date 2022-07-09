import {INCREASE, DECREASE} from "../actions/action"
// const init = 0
const init = {
    count:0,
    todo:[]
}
const changeNumber = (state=init, action) => {
    switch(action.type){
        case INCREASE: return {...state, count: state.count + action.payload};
        case DECREASE: return {...state, count: state.count - 1};
        default: return state;
    }
}

export default changeNumber;
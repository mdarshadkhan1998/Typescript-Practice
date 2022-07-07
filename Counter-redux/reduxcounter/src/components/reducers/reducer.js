// const init = 0
const init = {
    count:0
}
const changeNumber = (state=init, action) => {
    switch(action.type){
        case "INCREASE": return state.count + action.payload;
        case "DECREASE": return state - 1;
        default: return state;
        
    }
}

export default changeNumber;
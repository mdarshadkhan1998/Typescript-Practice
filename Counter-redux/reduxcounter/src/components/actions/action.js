export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const incNumber = (val) => {              
    // console.log("inc")
    return {
        type: INCREASE,
        payload:val
    }
} 
export const decNumber = () => {                   // type: "DECREASE"
    // console.log("dec")
    return {
        type: DECREASE
    }
} 
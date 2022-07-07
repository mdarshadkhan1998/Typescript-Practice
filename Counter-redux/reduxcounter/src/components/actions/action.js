export const incNumber = (val) => {
    // console.log("inc")
    return {
        type: "INCREASE",
        payload:val
    }
} 
export const decNumber = () => {
    // console.log("dec")
    return {
        type: "DECREASE"
    }
} 
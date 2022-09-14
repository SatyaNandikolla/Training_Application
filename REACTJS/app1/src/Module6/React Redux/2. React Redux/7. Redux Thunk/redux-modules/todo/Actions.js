import { INCREMENT_PRIPORITY, DECREMENT_PRIPORITY } from './ActionTypes.js'

const incrementPriority = () => {
    return {
        type: INCREMENT_PRIPORITY,
        count: 5
    }
}

const decrementPriority = () => {
    return {
        type: DECREMENT_PRIPORITY,
        count: 5
    }
}

export const incrementPriorityAsync = () => {
    return (dispatch) => {
        setTimeout(function(){ dispatch(incrementPriority()) }, 3000);
    }
}

export const decrementPriorityAsync = () => {
    return (dispatch) => {
        setTimeout(function(){ dispatch(decrementPriority()) }, 3000);
    }
}
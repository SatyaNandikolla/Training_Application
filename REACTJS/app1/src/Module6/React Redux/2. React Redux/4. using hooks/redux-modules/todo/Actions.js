import { INCREMENT_PRIPORITY, DECREMENT_PRIPORITY } from './ActionTypes.js'

export const incrementPriority = () => {
    return {
        type: INCREMENT_PRIPORITY,
        count: 5
    }
}

export const decrementPriority = () => {
    return {
        type: DECREMENT_PRIPORITY,
        count: 5
    }
}
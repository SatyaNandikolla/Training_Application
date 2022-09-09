import { NOT_ATTENDING, ATTENDING, ATTENDED } from './ActionTypes.js'

export const notAttending = () => {
    return {
        type: NOT_ATTENDING
    }
}

export const attending = () => {
    return {
        type: ATTENDING
    }
}

export const attended = () => {
    return {
        type: ATTENDED
    }
}
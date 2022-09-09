import { NOT_ATTENDING, ATTENDING, ATTENDED } from './ActionTypes.js'

const initialState = {
    "id": 1, "title": "Daily Standup Meeting", "status": ATTENDING
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case NOT_ATTENDING:
            return {
                ...state,
                status: NOT_ATTENDING
            }

        case ATTENDING:
            return {
                ...state,
                status: ATTENDING
            }

        case ATTENDED:
            return {
                ...state,
                status: ATTENDED
            }

        default:
            return state
    }
}

export default reducer
import { INCREMENT_PRIPORITY, DECREMENT_PRIPORITY } from './ActionTypes.js'

const initialState = {
    "id": 1, "title": "Learn JSF", "description": "Finish this article", "priority": 5
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_PRIPORITY:
            return {
                ...state,
                priority: state.priority + action.count
            }

        case DECREMENT_PRIPORITY:
            return {
                ...state,
                priority: state.priority - action.count
            }

        default:
            return state
    }
}

export default reducer
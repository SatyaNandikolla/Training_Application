import { createStore } from 'redux'

const INCREMENT_PRIPORITY = 'INCREMENT_PRIPORITY'
const DECREMENT_PRIPORITY = 'DECREMENT_PRIPORITY'

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

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(incrementPriority())
store.dispatch(incrementPriority())
store.dispatch(incrementPriority())
store.dispatch(decrementPriority())
store.dispatch(decrementPriority())
unsubscribe()
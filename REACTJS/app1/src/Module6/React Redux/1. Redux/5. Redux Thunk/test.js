import store from './redux-modules/Store.js'
import { incrementPriorityAsync, decrementPriorityAsync } from './redux-modules/todo/Actions.js'

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(incrementPriorityAsync())
store.dispatch(incrementPriorityAsync())
store.dispatch(incrementPriorityAsync())
store.dispatch(decrementPriorityAsync())
store.dispatch(decrementPriorityAsync())
unsubscribe()
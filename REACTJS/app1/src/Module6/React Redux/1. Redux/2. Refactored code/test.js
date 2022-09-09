import store from './redux-modules/Store.js'
import { incrementPriority, decrementPriority } from './redux-modules/todo/Actions.js'

console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(incrementPriority())
store.dispatch(incrementPriority())
store.dispatch(incrementPriority())
store.dispatch(decrementPriority())
store.dispatch(decrementPriority())
unsubscribe()
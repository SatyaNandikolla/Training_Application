import { createStore } from 'redux'
import todoReducer from './todo/Reducer.js'

const store = createStore(todoReducer)

export default store
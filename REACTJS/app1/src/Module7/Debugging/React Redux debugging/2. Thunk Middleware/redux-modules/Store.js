import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todoReducer from './todo/Reducer.js'

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(thunk, logger)))

export default store
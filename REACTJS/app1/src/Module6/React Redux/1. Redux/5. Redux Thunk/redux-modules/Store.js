import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
import thunk from 'redux-thunk'
import todoReducer from './todo/Reducer.js'

const logger = reduxLogger.createLogger()

const store = createStore(todoReducer, applyMiddleware(thunk.default, logger))

export default store
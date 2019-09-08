import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers'
import connectorsMiddleware from './middleware'

export const history = createBrowserHistory()

const middlewares = []
middlewares.push(createLogger())
middlewares.push(connectorsMiddleware)
middlewares.push(routerMiddleware(history))

const store = createStore(
  createRootReducer(history),
  applyMiddleware(
    ...middlewares
  )
)

export default store

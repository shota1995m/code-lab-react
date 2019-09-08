import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import lab from './reducers/labReducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  lab,
});

export default createRootReducer

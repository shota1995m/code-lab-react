import ActionTypes from './actionTypes.js'
import actions from './actions.js'

export default store => {
  return next => {
    return action => {
      return next(action)
    }
  }
}

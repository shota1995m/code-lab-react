import ActionTypes from './actionTypes.js'
import { createActions } from 'redux-actions'

const labActions = {
  [ActionTypes.LAB.NAME.UPDATE] : (name) => {
    return name;
  }
}

export default createActions({
  ...labActions,
})


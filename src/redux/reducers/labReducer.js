import { handleActions } from 'redux-actions';

import ActionTypes from '../actionTypes';

const initialState = {
  name: ""
}

export default handleActions({
  [ActionTypes.LAB.NAME.UPDATE] : (state, action) => {
    return  {
      ...state,
      name: action.payload
    }
  },
}, initialState);


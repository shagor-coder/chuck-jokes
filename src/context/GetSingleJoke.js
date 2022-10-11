import { ACTIONS } from '../action/ACTIONS'

export const getSingleJoke = (dispatch, id) => {
  return dispatch({ type: ACTIONS.SINGLE, payload: id })
}

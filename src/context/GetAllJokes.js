import axios from 'axios'
import { ACTIONS } from '../action/ACTIONS'

export const getALlJokes = async (dispatch) => {
  try {
    if (localStorage.getItem('cj-jokes') === undefined) {
      const response = await axios.get(
        'https://api.chucknorris.io/jokes/search?query=all'
      )

      const jokesData = await response.data.result

      if (jokesData) {
        return dispatch({ type: ACTIONS.GET_ALL, payload: jokesData })
      }
    } else {
      return dispatch({ type: ACTIONS.GET_ALL })
    }
  } catch (error) {
    return console.log('The error is', error)
  }
}

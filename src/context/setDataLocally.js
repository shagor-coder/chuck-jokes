import axios from 'axios'
import { ACTIONS } from '../action/ACTIONS'

export const setAllJokes = async (dispatch, setIsLoading) => {
  try {
    if (localStorage.getItem('cj-jokes') === null) {
      const response = await axios.get(
        'https://api.chucknorris.io/jokes/search?query=all'
      )
      const jokesData = await response.data.result
      setIsLoading(false)
      return dispatch({ type: ACTIONS.SET_ALL, payload: jokesData })
    } else {
      const retrivedData = JSON.parse(localStorage.getItem('cj-jokes'))
      setIsLoading(false)
      return dispatch({
        type: ACTIONS.SET_ALL,
        payload: retrivedData,
      })
    }
  } catch (error) {
    return console.log('The error is', error)
  }
}

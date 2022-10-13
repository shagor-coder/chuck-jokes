import { useEffect } from 'react'
import { ACTIONS } from '../action/ACTIONS'
import { useJokesContext } from './useJokesContext'

export const useGetSingleJoke = (id) => {
  const { state, dispatch } = useJokesContext()
  return useEffect(() => {
    dispatch({ type: ACTIONS.SINGLE, payload: id })
  }, [state.data, dispatch, id])
}

import { useEffect } from 'react'
import { ACTIONS } from '../action/ACTIONS'
import { useJokesContext } from './useJokesContext'

export const useGetAllJoke = () => {
  const { dispatch } = useJokesContext()
  return useEffect(() => {
    dispatch({ type: ACTIONS.GET_ALL })
  }, [dispatch])
}

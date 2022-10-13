import { useContext } from 'react'
import { JokesContext } from '../context/JokesContext'

export const useJokesContext = () => {
  return useContext(JokesContext)
}

import { useReducer, createContext, useEffect, useState } from 'react'
import { Loading } from '../ui/Loading'
import { jokesReducer } from './jokesReducer'
import { setAllJokes } from './setDataLocally'
const jokesInterFace = {
  data: [
    {
      id: '',
      value: '',
      categories: [],
      likes: 0,
      dislikes: 0,
    },
  ],
  single: {
    id: '',
    value: '',
    categories: [],
    likes: 0,
    dislikes: 0,
  },
}

export const JokesContext = createContext()

export const JokesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [state, dispatch] = useReducer(jokesReducer, jokesInterFace)
  useEffect(() => {
    setAllJokes(dispatch, setIsLoading)
  }, [])
  return (
    <JokesContext.Provider value={{ state, dispatch }}>
      {isLoading ? <Loading /> : children}
    </JokesContext.Provider>
  )
}

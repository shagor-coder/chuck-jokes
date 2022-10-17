import React from 'react'
import { useParams } from 'react-router-dom'
import { SingleJokes } from '../components/SingleJokes'
import { useGetSingleJoke } from '../hooks/useGetSingleJoke'
import { useJokesContext } from '../hooks/useJokesContext'

export const Single = () => {
  const { state } = useJokesContext()
  const { id, category } = useParams()
  const newId = state.single?.id
  const newCat = state.single?.categories
  useGetSingleJoke(newId ? newId : id)

  return (
    <>
      <SingleJokes
        id={newId ? newId : id}
        category={newCat ? newCat : category}
      />
    </>
  )
}

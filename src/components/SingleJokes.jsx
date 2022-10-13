import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleJoke } from '../hooks/useGetSingleJoke'
import { useJokesContext } from '../hooks/useJokesContext'
import { SingleCard } from '../ui/SingleCard'
export const SingleJokes = () => {
  const { state } = useJokesContext()
  const { id } = useParams()
  useGetSingleJoke(id)
  return (
    <div className='container'>
      {!state.isLoading && (
        <SingleCard
          id={state.single?.id}
          likes={state.single?.likes}
          dislikes={state.single?.dislikes}
          header={
            state.single?.categories.length
              ? state.single?.categories
              : 'Uncategorized'
          }
          description={state.single?.value}
        />
      )}
    </div>
  )
}

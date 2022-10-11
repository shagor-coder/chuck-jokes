import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleJoke } from '../context/GetSingleJoke'
import { JokesContext } from '../context/JokesContext'
import { SingleCard } from '../ui/SingleCard'
export const SingleJokes = () => {
  const { state, dispatch } = useContext(JokesContext)
  const { id } = useParams()
  useEffect(() => {
    return getSingleJoke(dispatch, id)
  }, [state.data, dispatch, id])
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

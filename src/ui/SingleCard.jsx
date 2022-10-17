import React from 'react'
import { ACTIONS } from '../action/ACTIONS'
import { Dislikes } from '../components/Dislikes'
import { Likes } from '../components/Likes'
import { useJokesContext } from '../hooks/useJokesContext'
import { Button } from './Button'

export const SingleCard = ({ header, description, id, likes, dislikes }) => {
  const { dispatch } = useJokesContext()
  const handleLike = () => {
    return dispatch({ type: ACTIONS.LIKES, payload: id })
  }

  const handleDislike = () => {
    return dispatch({ type: ACTIONS.DISLIKES, payload: id })
  }

  const handleNextClick = (event) => {
    return dispatch({ type: ACTIONS.NEXT, payload: id })
  }
  const handlePrevClick = (event) => {
    return dispatch({ type: ACTIONS.PREV, payload: id })
  }

  return (
    <div>
      <div className='card'>
        <div className='card-header'>
          <h2>{header}</h2>
        </div>
        <div className='card-body'>
          <p>{description}</p>
        </div>
        <div className='card-footer'></div>
      </div>
      <div className='card-actions'>
        <div className='likes-dislikes'>
          <Likes onclick={handleLike} id={id} likes={likes} />
          <Dislikes onclick={handleDislike} id={id} dislikes={dislikes} />
        </div>
        <div className='next-prev'>
          <Button
            type='button'
            name='prev'
            text='Prev Joke'
            onclick={handlePrevClick}
            id={id}
          />
          <Button
            type='button'
            name='next'
            text='Next Joke'
            onclick={handleNextClick}
            id={id}
          />
        </div>
      </div>
    </div>
  )
}

import React, { useContext } from 'react'
import { ACTIONS } from '../action/ACTIONS'
import { Dislikes } from '../components/Dislikes'
import { Likes } from '../components/Likes'
import { JokesContext } from '../context/JokesContext'

export const SingleCard = ({ header, description, id, likes, dislikes }) => {
  const { dispatch } = useContext(JokesContext)
  const handleLike = () => {
    dispatch({ type: ACTIONS.LIKES, payload: id })
  }

  const handleDislike = () => {
    dispatch({ type: ACTIONS.DISLIKES, payload: id })
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
      <div className='likes-dislikes'>
        <Likes onclick={handleLike} id={id} likes={likes} />
        <Dislikes onclick={handleDislike} id={id} dislikes={dislikes} />
      </div>
    </div>
  )
}

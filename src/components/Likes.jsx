import React from 'react'
import { BsHandThumbsUp } from 'react-icons/bs'
export const Likes = ({ onclick, likes, id }) => {
  return (
    <div>
      <span>
        <button className='like-btn' id={id} onClick={onclick}>
          <BsHandThumbsUp />
        </button>
        <span className='likes-counter'>{likes}</span>
      </span>
    </div>
  )
}

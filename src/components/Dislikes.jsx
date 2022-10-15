import React from 'react'
import { BsHandThumbsDown } from 'react-icons/bs'

export const Dislikes = ({ onclick, dislikes, id }) => {
  return (
    <div>
      <span>
        <button className='dislike-btn' id={id} onClick={onclick}>
          <BsHandThumbsDown />
        </button>
        <span className='dislikes-counter'>{dislikes}</span>
      </span>
    </div>
  )
}

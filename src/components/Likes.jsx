import React from 'react'

export const Likes = ({ onclick, likes, id }) => {
  return (
    <div>
      <span>
        <button id={id} onClick={onclick}>
          Likes
        </button>
        <span>{likes}</span>
      </span>
    </div>
  )
}

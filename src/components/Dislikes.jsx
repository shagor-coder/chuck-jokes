import React from 'react'

export const Dislikes = ({ onclick, dislikes, id }) => {
  return (
    <div>
      <span>
        <button id={id} onClick={onclick}>
          Dislikes
        </button>
        <span>{dislikes}</span>
      </span>
    </div>
  )
}

import React from 'react'

export const Button = ({ type, name, text, onclick }) => {
  return (
    <div>
      <button type={type} className={`cj-btn ${name}`} onClick={onclick}>
        {text}
      </button>
    </div>
  )
}

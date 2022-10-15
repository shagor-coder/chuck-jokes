import React from 'react'

export const Button = ({ type, name, text, onclick }) => {
  return (
    <div>
      <button
        type={type}
        name={name}
        className={`cj-btn ${name}`}
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  )
}

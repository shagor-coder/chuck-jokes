import React, { useState } from 'react'

export const Dropdown = ({ children, text = 'Dropdown', className }) => {
  const [show, setShow] = useState(false)
  return (
    <div className='dropdown-container'>
      <button
        className={`dropdown-button ${className}`}
        type='button'
        role='button'
        onClick={() => {
          setShow(!show)
        }}
      >
        {text}
      </button>
      <div role='dialog' className={`dropdown-body ${show ? 'show' : 'hide'}`}>
        {children}
      </div>
    </div>
  )
}

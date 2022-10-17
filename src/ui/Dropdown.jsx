import React, { useState } from 'react'
import { FaUser, FaCaretDown, FaCaretUp } from 'react-icons/fa'

export const Dropdown = ({ children, text = 'Dropdown', className }) => {
  const [show, setShow] = useState(false)
  return (
    <div className={`dropdown-container ${show ? 'show' : ''}`}>
      <button
        className={`dropdown-button ${className}`}
        type='button'
        onClick={() => {
          setShow(!show)
        }}
      >
        <span>
          <FaUser />
        </span>
        <span>{text}</span>
        <span>
          <FaCaretDown />
        </span>
      </button>
      <div
        className='overlay'
        onClick={() => {
          setShow(!show)
        }}
      ></div>
      <div role='dialog' className={`dropdown-body`}>
        <span>
          <FaCaretUp />
        </span>
        <div
          onClick={() => {
            setShow(!show)
          }}
          className='dropdown-items-container'
        >
          {children}
        </div>
      </div>
    </div>
  )
}

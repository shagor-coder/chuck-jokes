import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export const Button = ({ type, name, text, onclick, id }) => {
  return (
    <div>
      <button
        type={type}
        name={name}
        className={`cj-btn ${name}`}
        onClick={onclick}
        id={id}
      >
        {name && name === 'prev' ? (
          <>
            <span className='icon'>
              <BsChevronLeft />
            </span>
            <span>{text}</span>
          </>
        ) : name === 'next' ? (
          <>
            <span>{text}</span>
            <span className='icon'>
              <BsChevronRight />
            </span>
          </>
        ) : (
          <>{text}</>
        )}
      </button>
    </div>
  )
}

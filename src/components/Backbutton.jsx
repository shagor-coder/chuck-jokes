import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

export const Backbutton = ({ onclick }) => {
  return (
    <div>
      <button className='back-button' onClick={onclick}>
        <BsChevronLeft />
      </button>
    </div>
  )
}

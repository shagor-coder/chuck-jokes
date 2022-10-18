import React from 'react'
import { ArrowRight } from './ArrowRight'

export const Anchor = ({ text, onclick, id }) => {
  return (
    <div>
      <button id={id} onClick={onclick} className='anchor'>
        <span>{text}</span>
        <span> {<ArrowRight />} </span>
      </button>
    </div>
  )
}

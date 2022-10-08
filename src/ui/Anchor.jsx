import React from 'react'
import { ArrowRight } from './ArrowRight'

export const Anchor = ({ text, url }) => {
  return (
    <>
      <a className='anchor' href={url}>
        <span>{text}</span>
        <span> {<ArrowRight />} </span>
      </a>
    </>
  )
}

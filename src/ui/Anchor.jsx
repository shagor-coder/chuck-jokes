import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from './ArrowRight'

export const Anchor = ({ text, url, onclick, id }) => {
  return (
    <>
      <Link id={id} onClick={onclick} className='anchor' to={`${url}`}>
        <span>{text}</span>
        <span> {<ArrowRight />} </span>
      </Link>
    </>
  )
}

import React from 'react'
import { Anchor } from './Anchor'
import Thunder from '../assets/thunder.png'

export const Cards = ({ header, description, link, id }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>
          <span>
            <img src={Thunder} alt='card-header-icon' />
          </span>
          {header}
        </h2>
      </div>
      <div className='card-body'>
        <p>{description}</p>
      </div>
      <div className='card-footer'>
        <Anchor id={id} text='Learn More' url={link} />
      </div>
    </div>
  )
}

import React from 'react'
import { Anchor } from './Anchor'
import Thunder from '../assets/thunder.png'
import { useJokesContext } from '../hooks/useJokesContext'
import { ACTIONS } from '../action/ACTIONS'
import { useNavigate } from 'react-router-dom'

export const Cards = ({ header, description, id, link }) => {
  const { dispatch } = useJokesContext()
  const navigate = useNavigate()
  const handleLinkClick = () => {
    navigate(link)
    return dispatch({ type: ACTIONS.SINGLE, payload: id })
  }
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
        <Anchor
          onclick={handleLinkClick}
          id={id}
          text='Learn More'
          url={link}
        />
      </div>
    </div>
  )
}

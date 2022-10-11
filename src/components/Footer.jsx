import React from 'react'
import { Anchor } from '../ui/Anchor'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <h2>GOT JOKES? GET PAID FOR SUBMITTING!</h2>
        <div>
          <Anchor text='Submit Jokes' url='url' />
        </div>
      </div>
    </footer>
  )
}

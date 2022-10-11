import React from 'react'
import { SearchBar } from './SearchBar'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <h1 className='headline'>The Joke Bible</h1>
        <h2 className='sub-headline'> Daily Laughs for you and yours</h2>
        <div className='search-container'>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

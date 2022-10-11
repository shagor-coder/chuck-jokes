import React from 'react'
import { Cards } from '../ui/Cards'
export const JokesCards = ({ currentJokes }) => {
  return (
    <div className='cards-container'>
      {currentJokes?.map((joke) => {
        return (
          <Cards
            key={joke?.id}
            header={joke.categories?.length ? joke.categories : 'Uncategorized'}
            description={joke.value?.substring(0, 300) + `...`}
            link={joke?.id}
            id={joke?.id}
          />
        )
      })}
    </div>
  )
}

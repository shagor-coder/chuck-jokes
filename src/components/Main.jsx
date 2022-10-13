import React from 'react'
import { Button } from '../ui/Button'
import { Pagination } from './Pagination'
import { useGetAllJoke } from '../hooks/useGetAllJokes'
import { useJokesContext } from '../hooks/useJokesContext'

export const Main = () => {
  const { state } = useJokesContext()
  useGetAllJoke()
  const cate = state.data.map((d) => {
    return d.categories[0] === 'uncategorized'
      ? 'uncategorized'
      : d.categories[0]
  })

  const uniqueCat = [...new Set(cate)]
  console.log(uniqueCat)
  return (
    <main className='main'>
      <div className='container'>
        <div className='buttons-container'>
          {uniqueCat.map((btn) => {
            return (
              <Button key={btn} name={`${btn}-jokes`} text={`${btn} JOKES`} />
            )
          })}
        </div>
        <div>
          <Pagination itemsPerPage={9} />
        </div>
      </div>
    </main>
  )
}

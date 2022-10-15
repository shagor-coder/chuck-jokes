import React, { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { Pagination } from './Pagination'
import { useGetAllJoke } from '../hooks/useGetAllJokes'
import { useJokesContext } from '../hooks/useJokesContext'
import { ACTIONS } from '../action/ACTIONS'

export const Main = () => {
  useGetAllJoke()
  const [btnCategory, setBtnCategory] = useState([])
  const { state, dispatch } = useJokesContext()
  useEffect(() => {
    const cate = state.data.map((d) => {
      return d.categories ? d.categories : ''
    })

    const uniqueCat = [...new Set(cate)]
    const filteredCate = uniqueCat.filter((cat) => {
      return cat !== 'uncategorized' ? cat : null
    })

    setBtnCategory(filteredCate)
  }, [state.data])

  const handleClick = (event) => {
    return dispatch({ type: ACTIONS.CATEGORIES, payload: event.target.name })
  }

  return (
    <main className='main'>
      <div className='container'>
        <div className='buttons-container'>
          {btnCategory?.map((btn) => {
            return (
              <Button
                onclick={handleClick}
                key={btn}
                name={btn}
                text={`${btn} JOKES`}
              />
            )
          })}
        </div>
        <div>
          <Pagination data={state.data} itemsPerPage={9} />
        </div>
      </div>
    </main>
  )
}

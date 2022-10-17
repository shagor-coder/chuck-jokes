import React, { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { Pagination } from './Pagination'
import { useJokesContext } from '../hooks/useJokesContext'
import { useNavigate } from 'react-router-dom'
import { useGetAllJoke } from '../hooks/useGetAllJokes'

export const Main = () => {
  useGetAllJoke()
  const [btnCategory, setBtnCategory] = useState([])
  const { state } = useJokesContext()
  const navigate = useNavigate()
  useEffect(() => {
    const cate = state.data?.map((d) => {
      return d?.categories && d.categories
    })

    const uniqueCat = [...new Set(cate)]

    const filteredCate = uniqueCat.filter((cat) => {
      return cat !== 'uncategorized' ? cat : null
    })

    return setBtnCategory(filteredCate)
  }, [state.data])

  const handleClick = (event) => {
    return navigate(`/${event.target.name.trim()}`)
  }

  return (
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
  )
}

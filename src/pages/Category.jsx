import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Backbutton } from '../components/Backbutton'
import { Pagination } from '../components/Pagination'
import { useJokesContext } from '../hooks/useJokesContext'

export const Category = () => {
  const [categoryJokes, setCategoryJokes] = useState([{}])
  const { state } = useJokesContext()
  const { category } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const currentCategoryJokes = state?.data?.filter((joke) => {
      return joke?.categories?.includes(category)
    })
    setCategoryJokes(currentCategoryJokes)
  }, [state.data, category])

  return (
    <div className='category'>
      <div className='container'>
        <div className='headline'>
          <h2>All the {category.toUpperCase()} Jokes is here!</h2>
        </div>
        <div className='back-buttoncon'>
          <span>
            <Backbutton
              onclick={() => {
                navigate('/')
              }}
            />
          </span>
          <span>Home</span>
        </div>
        <div>
          <Pagination itemsPerPage={9} data={categoryJokes} />
        </div>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useJokesContext } from '../hooks/useJokesContext'
import { SingleCard } from '../ui/SingleCard'
import { Backbutton } from './Backbutton'
import { TrendingCat } from './TrendingCat'

export const SingleJokes = ({ id, category }) => {
  const { state } = useJokesContext()
  const navigate = useNavigate()
  const handleBackClick = () => {
    return navigate('/')
  }
  useEffect(() => {
    console.log(category)
    if (!category.length) return
    if (category !== '') return navigate(`/${category}/${id}`)
  }, [id, category, navigate])
  return (
    <>
      <div className='container'>
        <div className='back-buttoncon'>
          <Backbutton onclick={handleBackClick} />
        </div>
        <div className='joke-details'>
          <div className='single'>
            {!state.isLoading && (
              <SingleCard
                category={state.single?.categories}
                id={state.single?.id}
                likes={state.single?.likes}
                dislikes={state.single?.dislikes}
                header={
                  state.single?.categories.length
                    ? state.single?.categories
                    : 'Uncategorized'
                }
                description={state.single?.value}
              />
            )}
          </div>
          <div className='sidebar'>
            <h2>The top 10 Jokes of the week</h2>
            <div className='top-jokescon'>
              <TrendingCat state={state.data} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

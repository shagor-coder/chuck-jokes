import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSingleJoke } from '../hooks/useGetSingleJoke'
import { useJokesContext } from '../hooks/useJokesContext'
import { SingleCard } from '../ui/SingleCard'
import { Backbutton } from './Backbutton'
import { TrendingCat } from './TrendingCat'
export const SingleJokes = () => {
  const { state } = useJokesContext()
  const { id } = useParams()
  useGetSingleJoke(id)
  const navigate = useNavigate()
  const handleBackClick = () => {
    console.log('Click')
    return navigate('/')
  }

  return (
    <div className='main'>
      <div className='container'>
        <div className='back-buttoncon'>
          <Backbutton onclick={handleBackClick} />
        </div>
        <div className='joke-details'>
          <div className='single'>
            {!state.isLoading && (
              <SingleCard
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
              <TrendingCat state={state} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

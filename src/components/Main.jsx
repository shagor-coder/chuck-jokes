import React from 'react'
import { Button } from '../ui/Button'
import { Pagination } from './Pagination'
import { useGetAllJoke } from '../hooks/useGetAllJokes'

const buttos = [
  {
    name: 'ADULT JOKES',
    value: 'adult-jokes',
  },
  {
    name: 'DAD JOKES',
    value: 'dad-jokes',
  },
  {
    name: 'CRISTMAS JOKES',
    value: 'cristmas-jokes',
  },
  {
    name: 'JOB JOKES',
    value: 'job-jokes',
  },
  {
    name: 'BIRTHDAY JOKES',
    value: 'bd-jokes',
  },
  {
    name: 'SOCIAL JOKES',
    value: 'social-jokes',
  },
  {
    name: 'PUNS',
    value: 'puns-jokes',
  },
  {
    name: 'VIEW ALL',
    value: 'view-all',
  },
]

export const Main = () => {
  // const { dispatch } = useJokesContext()
  // useEffect(() => {
  //   return dispatch({ type: ACTIONS.GET_ALL })
  // }, [dispatch])
  useGetAllJoke()
  return (
    <main className='main'>
      <div className='container'>
        <div className='buttons-container'>
          {buttos.map((btn) => {
            return <Button key={btn.value} name={btn.value} text={btn.name} />
          })}
        </div>
        <div>
          <Pagination itemsPerPage={9} />
        </div>
      </div>
    </main>
  )
}

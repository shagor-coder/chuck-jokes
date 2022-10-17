import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetAllJoke } from '../hooks/useGetAllJokes'

export const TrendingCat = ({ state }) => {
  useGetAllJoke()
  const [topCategories, setTopCategories] = useState([''])
  useEffect(() => {
    let like = 0
    let dislike = 0
    const topCat = state?.map((d) => {
      like = Number(d.likes)
      dislike = Number(d.dislikes)
      return like > 20 && dislike < 10 && d.categories
    })

    const filteredCate = topCat.filter((cat) => {
      return cat !== false
    })
    const uniqueCategory = [...new Set(filteredCate)]
    return setTopCategories(uniqueCategory)
  }, [state])
  return (
    <div>
      {topCategories &&
        topCategories?.map((d) => (
          <Link key={d} to={`/${d}`}>
            <p className='top-jokes'>{d}</p>
          </Link>
        ))}
    </div>
  )
}

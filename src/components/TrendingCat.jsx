import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const TrendingCat = ({ state }) => {
  const [topCategories, setTopCategories] = useState()
  useEffect(() => {
    const topCat = state.data?.map((d) => {
      let like = Number(d.likes)
      return like > 5 && d.categories
    })

    const uniqueCategory = [...new Set(topCat)]
    return setTopCategories(uniqueCategory)
  }, [state.data])
  return (
    <div>
      {topCategories?.map((d) => (
        <Link key={d} to={`/${d}`}>
          <p className='top-jokes'>{d}</p>
        </Link>
      ))}
    </div>
  )
}

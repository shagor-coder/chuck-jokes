import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useJokesContext } from '../hooks/useJokesContext'

export const SearchBar = () => {
  const [searchItems, setSearchItems] = useState()
  const { state } = useJokesContext()
  const navigate = useNavigate()

  const handleoOnSeclect = (event) => {
    navigate(`/${event.categories}`)
  }

  useEffect(() => {
    const searchItems = state.data?.map((d) => {
      return { ...d, name: d.categories }
    })
    return setSearchItems(searchItems)
  }, [state.data])
  return (
    <>
      <ReactSearchAutocomplete
        items={searchItems}
        onSelect={handleoOnSeclect}
      />
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useJokesContext } from '../hooks/useJokesContext'

const handleOnHover = () => {
  console.log('Hover')
}

const handleOnFocus = (event) => {
  console.log(event.target, 'Focus')
}

export const SearchBar = () => {
  const [searchItems, setSearchItems] = useState()
  const { state } = useJokesContext()
  useEffect(() => {
    const searchItems = state.data?.map((d) => {
      return { ...d, name: d.value }
    })
    return setSearchItems(searchItems)
  }, [state.data])
  return (
    <>
      <ReactSearchAutocomplete
        items={searchItems}
        onHover={handleOnHover}
        onFocus={handleOnFocus}
      />
    </>
  )
}

import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const items = [
  {
    id: 1,
    name: 'Name',
  },
  {
    id: 2,
    name: 'Name2',
  },
  {
    id: 3,
    name: 'Name3',
  },
  {
    id: 4,
    name: 'Name4',
  },
]

const handleOnHover = () => {
  console.log('Hover')
}

const handleOnFocus = (event) => {
  console.log(event.target, 'Focus')
}

export const SearchBar = () => {
  return (
    <>
      <ReactSearchAutocomplete
        items={items}
        onHover={handleOnHover}
        onFocus={handleOnFocus}
      />
    </>
  )
}

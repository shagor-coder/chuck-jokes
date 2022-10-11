import React, { useEffect, useState, useContext } from 'react'
import ReactPaginate from 'react-paginate'
import { JokesCards } from './JokesCards'
import { JokesContext } from '../context/JokesContext'

export const Pagination = ({ itemsPerPage }) => {
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentJokes, setcurrentJokes] = useState([])

  const { state } = useContext(JokesContext)
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setcurrentJokes(state.data?.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(state.data?.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, state])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.data?.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <JokesCards currentJokes={currentJokes} />
      <ReactPaginate
        nextLabel='Next'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='Prev'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
      />
    </>
  )
}

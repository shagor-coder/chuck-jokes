import { ACTIONS } from '../action/ACTIONS'

export const jokesReducer = (state, action) => {
  const jokesData = JSON.parse(localStorage.getItem('cj-jokes'))
  switch (action.type) {
    case ACTIONS.SET_ALL:
      const jokesWLD = action.payload.map((d) => ({
        ...d,
        likes: 0,
        dislikes: 0,
        categories: d.categories?.length ? d.categories[0] : 'uncategorized',
      }))

      const sortedData = jokesWLD.sort((a, b) => {
        if (a.categories < b.categories) {
          return -1
        }
        if (a.categories > b.categories) {
          return 1
        }
        return 0
      })

      if (localStorage.getItem('cj-jokes') === null) {
        localStorage.setItem('cj-jokes', JSON.stringify(sortedData))
      }
      return { ...state, data: jokesWLD, isLoading: false }
    case ACTIONS.GET_ALL:
      return {
        ...state,
        data: jokesData,
      }

    case ACTIONS.CATEGORIES:
      return {
        ...state,
        data: state.data.filter((data) => {
          return data.categories.includes(action.payload)
        }),
      }

    case ACTIONS.SINGLE:
      const singleJokes = jokesData.find((d) => d.id === action.payload)
      return {
        ...state,
        single: singleJokes,
      }

    case ACTIONS.LIKES:
      const updatedLikeData = jokesData.map((d) => {
        return action.payload === d.id ? { ...d, likes: d.likes + 1 } : d
      })
      localStorage.setItem('cj-jokes', JSON.stringify(updatedLikeData))
      return {
        ...state,
        data: updatedLikeData,
      }

    case ACTIONS.DISLIKES:
      const updatedDislikeData = jokesData.map((d) => {
        return action.payload === d.id ? { ...d, dislikes: d.dislikes + 1 } : d
      })
      localStorage.setItem('cj-jokes', JSON.stringify(updatedDislikeData))
      return {
        ...state,
        data: updatedDislikeData,
      }

    case ACTIONS.NEXT:
      const currentIndexForNext = jokesData.find((d) => {
        return d.id === action.payload
      })
      let newIndexForNext = jokesData.indexOf(currentIndexForNext)

      return {
        ...state,
        single: jokesData[newIndexForNext + 1],
      }

    case ACTIONS.PREV:
      const currentIndexForPrev = jokesData.find((d) => {
        return d.id === action.payload
      })
      let newIndexForPrev = jokesData.indexOf(currentIndexForPrev)

      return {
        ...state,
        single: jokesData[newIndexForPrev - 1],
      }

    default:
      return state
  }
}

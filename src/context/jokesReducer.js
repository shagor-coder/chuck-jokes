import { ACTIONS } from '../action/ACTIONS'

export const jokesReducer = (state, action) => {
  const jokesData = JSON.parse(localStorage.getItem('cj-jokes'))
  switch (action.type) {
    case ACTIONS.SET_ALL:
      const jokesWLD = action.payload.map((d) => ({
        ...d,
        likes: 0,
        dislikes: 0,
      }))
      if (localStorage.getItem('cj-jokes') === null) {
        localStorage.setItem('cj-jokes', JSON.stringify(jokesWLD))
      }
      return { ...state, data: jokesWLD, isLoading: false }
    case ACTIONS.GET_ALL:
      return {
        ...state,
        data: action.payload ? action.payload : jokesData,
        isLoading: false,
      }

    case ACTIONS.CATEGORIES:
      return {
        ...state,
        data: state.data.filter((data) => {
          return data.categories.includes('explicit')
        }),
      }

    case ACTIONS.SINGLE:
      const singleJokes = jokesData.find((d) => d.id === action.payload)
      return {
        ...state,
        single: singleJokes,
        isLoading: false,
      }

    case ACTIONS.LIKES:
      const updatedLikeData = jokesData.map((d) => {
        return action.payload === d.id ? { ...d, likes: d.likes + 1 } : d
      })
      localStorage.setItem('cj-jokes', JSON.stringify(updatedLikeData))
      return {
        ...state,
        data: updatedLikeData,
        isRender: true,
      }
    case ACTIONS.DISLIKES:
      const updatedDislikeData = jokesData.map((d) => {
        return action.payload === d.id ? { ...d, dislikes: d.dislikes + 1 } : d
      })
      localStorage.setItem('cj-jokes', JSON.stringify(updatedDislikeData))
      return {
        ...state,
        data: updatedDislikeData,
        isRender: true,
      }
    default:
      return state
  }
}

// taken from https://chwastek.eu/blog/async-actions-with-usereducer-in-react

import { useReducer, useCallback } from 'react'

const useReducerWithThunk = (reducer, initialState) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const customDispatch = (action) => {
    if (typeof action === 'function') {
      return action(customDispatch)
    } else {
      dispatch(action)
    }
  }

  const stableDispatch = useCallback(customDispatch, [dispatch])

  return [ state, stableDispatch ]
}

export { useReducerWithThunk }
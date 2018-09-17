import { appName } from '../config'

/**
 * Constants
 * */

export const moduleName = 'search'
const prefix = `${appName}/${moduleName}`
export const SEARCH_REQUEST = `${prefix}/SEARCH_REQUEST`

/**
 * Reducer
 * */

const initialState = {}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return state
    default:
      return state
  }
}

/**
 * Selectors
 * */

/**
 * Action Creators
 * */

export const searchRequest = (query) => {
  return {
    type: SEARCH_REQUEST,
    payload: query
  }
}

/**
 * Sagas
 * */

import { appName } from '../config'
import { takeEvery, all, call, put } from 'redux-saga/effects'
import { Record, List } from 'immutable'
import { createSelector } from 'reselect'

import { search, searchChannels } from '../api'

/**
 * Constants
 * */

export const moduleName = 'search'
const prefix = `${appName}/${moduleName}`
export const SEARCH_REQUEST = `${prefix}/SEARCH_REQUEST`
export const SEARCH_SUCCESS = `${prefix}/SEARCH_SUCCESS`

/**
 * Reducer
 * */

export const SearchRecord = Record({
  loading: false,
  loaded: false,
  entities: new List(),
  nextPage: null
})

export const searchReducer = (state = new SearchRecord(), action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return state.set('entities', new List(action.payload.data.items))
    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]
export const searchSelector = createSelector(
  stateSelector,
  (state) => state.entities
)

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

export function* searchSaga({ payload }) {
  try {
    const searchList = yield call(search, payload)

    yield put({
      type: SEARCH_SUCCESS,
      payload: searchList
    })
  } catch (error) {}
}

export function* saga() {
  yield all([takeEvery(SEARCH_REQUEST, searchSaga)])
}

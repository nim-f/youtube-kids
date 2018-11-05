import { appName } from '../config'
import { searchChannels } from '../api'
import { takeEvery, all, call, put, throttle } from 'redux-saga/effects'
import { Record, List } from 'immutable'
import { createSelector } from 'reselect'
/**
 * Constants
 * */

export const moduleName = 'channels'
const prefix = `${appName}/${moduleName}`
export const CHANNEL_SEARCH_REQUEST = `${prefix}/SEARCH_REQUEST`
export const CHANNEL_SEARCH_SUCCESS = `${prefix}/SEARCH_SUCCESS`

/**
 * Reducer
 * */

export const ChannelsRecord = Record({
  loading: false,
  loaded: false,
  entities: new List(),
  nextPage: null
})

export const channelsReducer = (state = new ChannelsRecord(), action) => {
  switch (action.type) {
    case CHANNEL_SEARCH_SUCCESS:
      return state.set('entities', new List(action.payload.data.items))
    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]
export const channelSearchSelector = createSelector(
  stateSelector,
  (state) => state.entities
)

/**
 * Action Creators
 * */
export const channelSearchRequest = (query) => {
  return {
    type: CHANNEL_SEARCH_REQUEST,
    payload: query
  }
}

/**
 * Sagas
 * */

export function* channelSearchSaga({ payload }) {
  try {
    const searchList = yield call(searchChannels, payload)
    yield put({
      type: CHANNEL_SEARCH_SUCCESS,
      payload: searchList
    })
  } catch (error) {}
}

function* watchInput() {
  yield throttle(600, CHANNEL_SEARCH_REQUEST, channelSearchSaga)
}

export function* saga() {
  yield all([watchInput()])
}

import { appName } from '../config'
import { Record, List } from 'immutable'
import { createSelector } from 'reselect'
import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import { storeData, retrieveData } from '../helpers'

/**
 * Constants
 * */
export const moduleName = 'storage'
const prefix = `${appName}/${moduleName}`
export const GET_CHANNELS_REQUEST = `${prefix}/GET_CHANNELS_REQUEST`
export const GET_CHANNELS_SUCCESS = `${prefix}/GET_CHANNELS_SUCCESS`
export const ADD_CHANNEL_REQUEST = `${prefix}/ADD_CHANNEL_REQUEST`
export const ADD_CHANNEL_SUCCESS = `${prefix}/ADD_CHANNEL_SUCCESS`

/**
 * Reducer
 * */

export const StorageRecord = Record({
  allowedChannels: new List()
})

export const storageReducer = (state = new StorageRecord(), action) => {
  switch (action.type) {
    case GET_CHANNELS_SUCCESS:
      return state.set('allowedChannels', new List(action.payload))
    case ADD_CHANNEL_SUCCESS:
      return state.update('allowedChannels', (allowedChannels) =>
        allowedChannels.push(action.payload.channelId)
      )
    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]
export const allowedChannelsSelector = createSelector(stateSelector, (state) =>
  state.allowedChannels.toArray()
)

/**
 * Action Creators
 * */

export const getAllowedChannels = () => {
  return {
    type: GET_CHANNELS_REQUEST
  }
}

export const addAllowedChannel = (channelId) => {
  return {
    type: ADD_CHANNEL_REQUEST,
    payload: { channelId }
  }
}

/**
 * Sagas
 * */
export function writeAllowedToStorage(array) {
  console.log('write to storage', array)
  return storeData('channels', JSON.stringify(array)).then(
    (response) => response
  )
}

export function getAllowedFromStorage() {
  return retrieveData('channels').then((response) => JSON.parse(response))
}

export function* allowedChannelsSaga() {
  try {
    const allowed = yield call(getAllowedFromStorage)

    console.log('get allowed', allowed)

    yield put({
      type: GET_CHANNELS_SUCCESS,
      payload: allowed
    })
  } catch (error) {}
}

export function* addChannelSaga({ payload }) {
  const channels = yield select(allowedChannelsSelector)

  console.log('channels', channels)
  channels.push(payload.channelId)
  console.log('channels2', channels)

  try {
    const allowed = yield call(writeAllowedToStorage, channels)

    yield put({
      type: ADD_CHANNEL_SUCCESS,
      payload
    })
  } catch (error) {}
}

export function* saga() {
  yield all([
    takeEvery(ADD_CHANNEL_REQUEST, addChannelSaga),
    takeEvery(GET_CHANNELS_REQUEST, allowedChannelsSaga)
  ])
}

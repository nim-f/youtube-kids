import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { searchReducer } from '../ducks/search'
import { channelsReducer } from '../ducks/channels'
import { storageReducer } from '../ducks/storage'

export default combineReducers({
  form,
  search: searchReducer,
  channels: channelsReducer,
  storage: storageReducer
})

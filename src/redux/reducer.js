import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { searchReducer } from "../ducks/search";

export default combineReducers({
  form,
  search: searchReducer
})

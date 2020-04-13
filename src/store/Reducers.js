import { combineReducers } from 'redux'

import topicReducer from './reducers/Topics'

import {

  ADD_LIST, REMOVE_LIST,
  SHOW_MODAL, HIDE_MODAL,

} from './Actions'


function lists(state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...state,
        action.list,
      ]
    case REMOVE_LIST:
      return state.filter((list) => list.id !== action.id)
    default:
      return state
  }
}

function modalShown(state = false, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return true
    case HIDE_MODAL:
      return false
    default:
      return state
  }
}


// This is the main ish that handles what we're doing here
const lingualApp = combineReducers({
  lists,
  modalShown,
  topics: topicReducer,
})

export default lingualApp



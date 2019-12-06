import { combineReducers } from 'redux'

import { ADD_LIST, REMOVE_LIST } from './Actions'

import List from '../model/List'

function lists(state = [], action) {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...state,
        new List(action.id, action.title, action.date, [])
      ]
    case REMOVE_LIST:
      return state.filter((list) => list.id !== action.id)
    default:
      return state
  }
}


// This is the main ish that handles what we're doing here
const lingualApp = combineReducers({
  lists,
})

export default lingualApp



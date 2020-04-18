import {
  createReducer,
  addNewList,
  addItemToList,
  removeItemFromList,
  updateItem
} from './ReducerUtilities'
import { types } from '../Actions'

import { TOPICS } from '../../util/Constants'

function createTopicList(topicsState = [], action) {
  return addNewList(topicsState, action.list);
}

function addTopicToList(topicsState = [], action) {
  return addItemToList(topicsState, action.listID, action.topic);
}

function removeTopicFromList(topicsState = [], action) {
  return removeItemFromList(topicsState, action.listID, action.topicID);
}

function updateTopic(topicsState = [], action) {
  return updateItem(topicsState, action.listID, action.topicID, action.newTopicData);
}


/* createReducer(initialState, handlers) */
const topicReducer = createReducer([], {
  [types[TOPICS].CREATE_LIST]: createTopicList,
  [types[TOPICS].ADD_ITEM_TO_LIST]: addTopicToList,
  [types[TOPICS].REMOVE_ITEM_FROM_LIST]: removeTopicFromList,
  [types[TOPICS].UPDATE_ITEM]: updateTopic,
})

export default topicReducer;


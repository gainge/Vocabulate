import {
  createReducer,
  addNewList,
  addItemToList,
  removeItemFromList,
  updateItem
} from './ReducerUtilities'
import { types } from '../Actions'


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
  [types.TOPIC.CREATE_TOPIC_LIST]: createTopicList,
  [types.TOPIC.ADD_TOPIC_TO_LIST]: addTopicToList,
  [types.TOPIC.REMOVE_TOPIC_FROM_LIST]: removeTopicFromList,
  [types.TOPIC.UPDATE_TOPIC]: updateTopic,
})

export default topicReducer;


import { createReducer, updateObject, updateItemInArray } from './ReducerUtilities'
import { types } from '../Actions'


function createTopicList(topicsState = [], action) {
  return [
    ...topicsState,
    action.list
  ]
}

function addTopicToList(topicsState = [], action) {
  return updateItemInArray(topicsState, action.listID, (topicList) => {
    return updateObject(topicList, { items: [...topicList.items, action.topic] })
  })
}

function removeTopicFromList(topicsState = [], action) {
  return updateItemInArray(topicsState, action.listID, (topicList) => {
    return updateObject(topicList, {items: topicList.items.filter(topic => topic.id !== action.topicID)})
  })
}

function updateTopic(topicsState = [], action) {
  return updateItemInArray(topicsState, action.listID, (topicList) => {
    return updateItemInArray(topicList.items, action.topicID, (oldTopic) => {
      return updateObject(oldTopic, action.newTopicData);
    })
  })
}


/* createReducer(initialState, handlers) */
const topicReducer = createReducer([], {
  [types.TOPIC.CREATE_TOPIC_LIST]: createTopicList,
  [types.TOPIC.ADD_TOPIC_TO_LIST]: addTopicToList,
  [types.TOPIC.REMOVE_TOPIC_FROM_LIST]: removeTopicFromList,
  [types.TOPIC.UPDATE_TOPIC]: updateTopic,
})

export default topicReducer;


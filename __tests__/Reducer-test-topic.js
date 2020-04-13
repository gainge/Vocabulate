import { types } from '../src/store/Actions'
import topicReducer from '../src/store/reducers/Topics'
import Topic from '../src/model/Topic'
import List from '../src/model/List'

describe('Topics Reducer', () => {
  it('should return the initial state', () => {
    expect(topicReducer(undefined, {})).toEqual(
      []
    )
  })

  const newTopic = new Topic(1, 'How does writing tests feel?');
  const updatedTopic = new Topic(newTopic.id, 'Writing tests feels great!')
  const basicList = new List(1, 'test list', 0, []);
  const addedList = new List(basicList.id, basicList.title, basicList.creationDate, [ newTopic ]);
  const updatedList = new List(basicList.id, basicList.title, basicList.creationDate, [ updatedTopic ]);

  it('should handle CREATE_TOPIC_LIST', () => {
    expect(topicReducer([], {
      type: types.TOPIC.CREATE_TOPIC_LIST,
      list: basicList
    })).toEqual([
      basicList
    ]);
  })

  // Man I guess you could probably extract a lot of these states in to constants too huh
  // pretty sick

  it('should handle ADD_TOPIC_TO_LIST', () => {
    expect(topicReducer([
      basicList
    ], {
      type: types.TOPIC.ADD_TOPIC_TO_LIST,
      topic: newTopic,
      listID: basicList.id,
    })).toEqual([
      addedList
    ])
  })


  it('should handle REMOVE_TOPIC_FROM_LIST', () => {
    expect(topicReducer([
      addedList
    ], {
      type: types.TOPIC.REMOVE_TOPIC_FROM_LIST,
      topicID: newTopic.id,
      listID: basicList.id,
    })).toEqual([
      basicList
    ])
  })


  it('should handle UPDATE_TOPIC', () => {
    expect(topicReducer([
      addedList
    ], {
      type: types.TOPIC.UPDATE_TOPIC,
      topicID: newTopic.id,
      listID: basicList.id,
      newTopicData: updatedTopic,
    })).toEqual([
      updatedList
    ])
  })

})



import * as actions from '../src/store/Actions';
import topicsReducer from '../src/store/reducers/Topics'

describe('Topics Reducer', () => {
  it('should return the initial state', () => {
    expect(topicsReducer(undefined, {})).toEqual(
      []
    )
  })

  it('should handle CREATE_TOPIC_LIST', () => {
    expect(topicsReducer([], {
      type: actions.CREATE_TOPIC_LIST,
      list: {
        id: 1,
        title: 'test list',
        creationDate: 0,
        items: []
      }
    })).toEqual([
      {
        id: 1,
        title: 'test list',
        creationDate: 0,
        items: []
      }
    ]);
  })


})



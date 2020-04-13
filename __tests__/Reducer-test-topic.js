import * as actions from '../src/store/Actions';
import topicsReducer from '../src/store/reducers/Topics'

describe('Topics Reducer', () => {
  it('should return the initial state', () => {
    expect(topicsReducer(undefined, {})).toEqual(
      []
    )
  })
})



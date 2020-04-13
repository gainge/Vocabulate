import lingualApp from "../src/store/Reducers";
import * as actions from '../src/store/Actions';

describe('Topics Reducer', () => {
  it('should return the initial state', () => {
    expect(lingualApp(undefined, {})).toEqual({
      lists: [],
      modalShown: false,
      topics: []
    })
  })

  
})



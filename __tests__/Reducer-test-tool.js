import { types } from '../src/store/Actions';
import toolReducer from '../src/store/reducers/Tools';
import Tool from '../src/model/Tool';
import List from '../src/model/List';


describe('Tools Reducer', () => {
  it('should return the initial state', () => {
    expect(toolReducer(undefined, {})).toEqual(
      []
    )
  })

  /* Helpful homies for testing */
  const newTool = new Tool(1, 'Some sick grammar!', 'use then when in distress');
  const updatedTool = new Tool(newTool.id, 'Even sicker than before!', newTool.body);
  const basicList = new List(1, 'Some sick tools!', 0, []);
  const addedList = new List(basicList.id, basicList.title, basicList.creationDate, [ newTool ]);
  const updatedList = new List(basicList.id, basicList.title, basicList.creationDate, [ updatedTool ]);

  it('should handle CREATE_TOOL_LIST', () => {
    expect(toolReducer([], {
      type: types.TOOL.CREATE_TOOL_LIST,
      list: basicList
    })).toEqual([
      basicList
    ]);
  })

  // Man I guess you could probably extract a lot of these states in to constants too huh
  // pretty sick

  it('should handle ADD_TOOL_TO_LIST', () => {
    expect(toolReducer([
      basicList
    ], {
      type: types.TOOL.ADD_TOOL_TO_LIST,
      tool: newTool,
      listID: basicList.id,
    })).toEqual([
      addedList
    ])
  })


  it('should handle REMOVE_TOOL_FROM_LIST', () => {
    expect(toolReducer([
      addedList
    ], {
      type: types.TOOL.REMOVE_TOOL_FROM_LIST,
      toolID: newTool.id,
      listID: basicList.id,
    })).toEqual([
      basicList
    ])
  })


  it('should handle UPDATE_TOOL', () => {
    expect(toolReducer([
      addedList
    ], {
      type: types.TOOL.UPDATE_TOOL,
      toolID: newTool.id,
      listID: basicList.id,
      newToolData: updatedTool,
    })).toEqual([
      updatedList
    ])
  })

})


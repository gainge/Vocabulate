import {
  createReducer,
  addNewList,
  addItemToList,
  removeItemFromList,
  updateItem
} from './ReducerUtilities'
import { types } from '../Actions'


function createToolList(toolsState = [], action) {
  return addNewList(toolsState, action.list);
}

function addToolToList(toolsState = [], action) {
  return addItemToList(toolsState, action.listID, action.tool);
}

function removeToolFromList(toolsState = [], action) {
  return removeItemFromList(toolsState, action.listID, action.toolID);
}

function updateTool(toolsState = [], action) {
  return updateItem(toolsState, action.listID, action.toolID, action.newToolData);
}


const toolReducer = createReducer({
  [types.TOOL.CREATE_TOOL_LIST]: createToolList,
  [types.TOOL.ADD_TOOL_TO_LIST]: addToolToList,
  [types.TOOL.REMOVE_TOOL_FROM_LIST]: removeToolFromList,
  [types.TOOL.UPDATE_TOOL]: updateTool,
})


export default toolReducer;

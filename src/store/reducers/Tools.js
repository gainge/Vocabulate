import {
  createReducer,
  addNewList,
  addItemToList,
  removeItemFromList,
  updateItem
} from './ReducerUtilities'
import { types } from '../Actions'

import { TOOLS } from '../../util/Constants'

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


const toolReducer = createReducer([], {
  [types[TOOLS].CREATE_LIST]: createToolList,
  [types[TOOLS].ADD_ITEM_TO_LIST]: addToolToList,
  [types[TOOLS].REMOVE_ITEM_FROM_LIST]: removeToolFromList,
  [types[TOOLS].UPDATE_ITEM]: updateTool,
})


export default toolReducer;

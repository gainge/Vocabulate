import {
  createReducer,
  addNewList,
  addItemToList,
  removeItemFromList,
  updateItem
} from './ReducerUtilities'
import { types } from '../Actions'

function createVocabList(vocabState = [], action) {
  return addNewList(vocabState, action.list);
}

function addVocabToList(vocabState = [], action) {
  return addItemToList(vocabState, action.listID, action.vocab);
}

function removeVocabFromList(vocabState = [], action) {
  return removeItemFromList(vocabState, action.listID, action.vocabID);
}

function updateVocab(vocabState = [], action) {
  return updateItem(vocabState, action.listID, action.vocabID, action.newVocabData);
}


const vocabReducer = createReducer([], {
  [types.VOCAB.CREATE_VOCAB_LIST]: createVocabList,
  [types.VOCAB.ADD_VOCAB_TO_LIST]: addVocabToList,
  [types.VOCAB.REMOVE_VOCAB_FROM_LIST]: removeVocabFromList,
  [types.VOCAB.UPDATE_VOCAB]: updateVocab,
})


export default vocabReducer;



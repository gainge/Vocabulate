import { types } from '../src/store/Actions';
import vocabReducer from '../src/store/reducers/Vocab';
import Vocab from '../src/model/Vocab';
import List from '../src/model/List';

import { VOCAB } from '../src/util/Constants'


describe('Vocab Reducer', () => {
  it('should return the initial state', () => {
    expect(vocabReducer(undefined, {})).toEqual(
      []
    )
  })

  const newVocab = new Vocab(1, 'けいたいでんわ', 'Telephone');
  const updatedVocab = new Vocab(newVocab.id, newVocab.term, 'Mobile Phone');
  const basicList = new List(1, 'You already know we got vocab', 0, []);
  const addedList = new List(basicList.id, basicList.title, basicList.creationDate, [ newVocab ]);
  const updatedList = new List(basicList.id, basicList.title, basicList.creationDate, [ updatedVocab ]);

  it('should handle CREATE_VOCAB_LIST', () => {
    expect(vocabReducer([], {
      type: types[VOCAB].CREATE_LIST,
      list: basicList
    })).toEqual([
      basicList
    ]);
  })

  it('should handle ADD_VOCAB_TO_LIST', () => {
    expect(vocabReducer([
      basicList
    ], {
      type: types[VOCAB].ADD_ITEM_TO_LIST,
      vocab: newVocab,
      listID: basicList.id,
    })).toEqual([
      addedList
    ])
  })


  it('should handle REMOVE_VOCAB_FROM_LIST', () => {
    expect(vocabReducer([
      addedList
    ], {
      type: types[VOCAB].REMOVE_ITEM_FROM_LIST,
      vocabID: newVocab.id,
      listID: basicList.id,
    })).toEqual([
      basicList
    ])
  })


  it('should handle UPDATE_VOCAB', () => {
    expect(vocabReducer([
      addedList
    ], {
      type: types[VOCAB].UPDATE_ITEM,
      vocabID: newVocab.id,
      listID: basicList.id,
      newVocabData: updatedVocab,
    })).toEqual([
      updatedList
    ])
  })



})



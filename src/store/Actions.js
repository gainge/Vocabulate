

/* Action Types */


/* TOPIC */
export const CREATE_TOPIC_LIST = 'CREATE_TOPIC_LIST';
export const ADD_TOPIC_TO_LIST = 'ADD_TOPIC_TO_LIST';


/* TOOL */
export const CREATE_TOOL_LIST = 'CREATE_TOOL_LIST';
export const ADD_TOOL_TO_LIST = 'ADD_TOOL_TO_LIST';



/* VOCAB */
export const CREATE_VOCAB_LIST = 'CREATE_VOCAB_LIST';
export const ADD_VOCAB_TO_LIST = 'ADD_VOCAB_TO_LIST';



/* LIST */
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

/* MODAL */
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';


/*
other constants example
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

*/


/* Action Creators */

/* TOPIC */
export function createTopicList(list) {
  return {
    type: CREATE_TOPIC_LIST,
    list: list,
  }
}

export function addTopicToList(topic, listID) {
  return {
    type: ADD_TOPIC_TO_LIST,
    topic: topic,
    listID: listID,
  }
}




/* TOOL */
export function createToolList(list) {
  return {
    type: CREATE_TOOL_LIST,
    list: list,
  }
}

export function addToolToList(tool, listID) {
  return {
    type: ADD_TOOL_TO_LIST,
    tool: tool,
    listID: listID,
  }
}




/* VOCAB */
export function createVocabList(list) {
  return {
    type: CREATE_VOCAB_LIST,
    list: list,
  }
}

export function addVocabToList(vocab, listID) {
  return {
    type: ADD_VOCAB_TO_LIST,
    vocab: vocab,
    listID: listID,
  }
}




/* LIST */
export function addList(list) {
  return {
    type: ADD_LIST,
    list: list,
  }
}

export function removeList(id) {
  return {
    type: REMOVE_LIST,
    id: id,
  }
}


/* MODAL */
export function showModal() {
  return {
    type: SHOW_MODAL,
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  }
}





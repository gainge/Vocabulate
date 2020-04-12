

/* Action Types */


/* TOPIC */
export const CREATE_TOPIC_LIST = 'CREATE_TOPIC_LIST';


/* TOOL */
export const CREATE_TOOL_LIST = 'CREATE_TOOL_LIST';



/* VOCAB */
export const CREATE_VOCAB_LIST = 'CREATE_VOCAB_LIST';



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




/* TOOL */
export function createToolList(list) {
  return {
    type: CREATE_TOOL_LIST,
    list: list,
  }
}




/* VOCAB */
export function createVocabList(list) {
  return {
    type: CREATE_VOCAB_LIST,
    list: list,
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







/* Action Types */

export const types = {
  TOPIC: {
    CREATE_TOPIC_LIST: 'CREATE_TOPIC_LIST',
    ADD_TOPIC_TO_LIST: 'ADD_TOPIC_TO_LIST',
    REMOVE_TOPIC_FROM_LIST: 'REMOVE_TOPIC_FROM_LIST',
    UPDATE_TOPIC: 'UPDATE_TOPIC',
  },
  TOOL: {
    CREATE_TOOL_LIST: 'CREATE_TOOL_LIST',
    ADD_TOOL_TO_LIST: 'ADD_TOOL_TO_LIST',
    REMOVE_TOOL_FROM_LIST: 'REMOVE_TOOL_FROM_LIST',
    UPDATE_TOOL: 'UPDATE_TOOL',
  },
  VOCAB: {
    CREATE_VOCAB_LIST: 'CREATE_VOCAB_LIST',
    ADD_VOCAB_TO_LIST: 'ADD_VOCAB_TO_LIST',
    REMOVE_VOCAB_FROM_LIST: 'REMOVE_VOCAB_FROM_LIST',
    UPDATE_VOCAB: 'UPDATE_VOCAB',
  }
}


/* TOPIC */
export const CREATE_TOPIC_LIST = 'CREATE_TOPIC_LIST';
export const ADD_TOPIC_TO_LIST = 'ADD_TOPIC_TO_LIST';
export const REMOVE_TOPIC_FROM_LIST = 'REMOVE_TOPIC_FROM_LIST';
export const UPDATE_TOPIC = 'UPDATE_TOPIC';


/* TOOL */
export const CREATE_TOOL_LIST = 'CREATE_TOOL_LIST';
export const ADD_TOOL_TO_LIST = 'ADD_TOOL_TO_LIST';
export const REMOVE_TOOL_FROM_LIST = 'REMOVE_TOOL_FROM_LIST';
export const UPDATE_TOOL = 'UPDATE_TOOL';



/* VOCAB */
export const CREATE_VOCAB_LIST = 'CREATE_VOCAB_LIST';
export const ADD_VOCAB_TO_LIST = 'ADD_VOCAB_TO_LIST';
export const REMOVE_VOCAB_FROM_LIST = 'REMOVE_VOCAB_FROM_LIST';
export const UPDATE_VOCAB = 'UPDATE_VOCAB';



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

export function removeTopicFromList(topicID, listID) {
  return {
    type: REMOVE_TOPIC_FROM_LIST,
    topicID: topicID,
    listID: listID,
  }
}

export function updateTopic(topicID, listID, newTopicData) {
  return {
    type: UPDATE_TOPIC,
    topicID: topicID,
    listID: listID,
    newTopicData: newTopicData,
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

export function removeToolFromList(toolID, listID) {
  return {
    type: REMOVE_TOOL_FROM_LIST,
    toolID: toolID,
    listID: listID,
  }
}

export function updateTool(toolID, listID, newToolData) {
  return {
    type: UPDATE_TOOL,
    toolID: toolID,
    listID: listID,
    newToolData: newToolData,
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

export function removeVocabFromList(vocabID, listID) {
  return {
    type: REMOVE_VOCAB_FROM_LIST,
    vocabID: vocabID,
    listID: listID,
  }
}

export function updateVocab(vocabID, listID) {
  return {
    type: UPDATE_VOCAB,
    vocabID: vocabID,
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





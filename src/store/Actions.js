

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
    type: types.TOPIC.CREATE_TOPIC_LIST,
    list: list,
  }
}

export function addTopicToList(topic, listID) {
  return {
    type: types.TOPIC.ADD_TOPIC_TO_LIST,
    topic: topic,
    listID: listID,
  }
}

export function removeTopicFromList(topicID, listID) {
  return {
    type: types.TOPIC.REMOVE_TOPIC_FROM_LIST,
    topicID: topicID,
    listID: listID,
  }
}

export function updateTopic(topicID, listID, newTopicData) {
  return {
    type: types.TOPIC.UPDATE_TOPIC,
    topicID: topicID,
    listID: listID,
    newTopicData: newTopicData,
  }
}




/* TOOL */
export function createToolList(list) {
  return {
    type: types.TOOL.CREATE_TOOL_LIST,
    list: list,
  }
}

export function addToolToList(tool, listID) {
  return {
    type: types.TOOL.ADD_TOOL_TO_LIST,
    tool: tool,
    listID: listID,
  }
}

export function removeToolFromList(toolID, listID) {
  return {
    type: types.TOOL.REMOVE_TOOL_FROM_LIST,
    toolID: toolID,
    listID: listID,
  }
}

export function updateTool(toolID, listID, newToolData) {
  return {
    type: types.TOOL.UPDATE_TOOL,
    toolID: toolID,
    listID: listID,
    newToolData: newToolData,
  }
}




/* VOCAB */
export function createVocabList(list) {
  return {
    type: types.VOCAB.CREATE_VOCAB_LIST,
    list: list,
  }
}

export function addVocabToList(vocab, listID) {
  return {
    type: types.VOCAB.ADD_VOCAB_TO_LIST,
    vocab: vocab,
    listID: listID,
  }
}

export function removeVocabFromList(vocabID, listID) {
  return {
    type: types.VOCAB.REMOVE_VOCAB_FROM_LIST,
    vocabID: vocabID,
    listID: listID,
  }
}

export function updateVocab(vocabID, listID, newVocabData) {
  return {
    type: types.VOCAB.UPDATE_VOCAB,
    vocabID: vocabID,
    listID: listID,
    newVocabData: newVocabData,
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





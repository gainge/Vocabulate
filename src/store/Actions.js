

/* Action Types */

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





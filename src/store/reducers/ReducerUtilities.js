
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues)
}

export function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    if (item.id !== itemId) {
      // Since we only want to update one item, preserve all others as they are now
      return item
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item)
    return updatedItem
  })

  return updatedItems
}

export function addNewList(previousState, newList) {
  return [
    ...previousState,
    newList
  ]
}

export function addItemToList(lists, listID, newItem) {
  return updateItemInArray(lists, listID, (targetList) => {
    return updateObject(targetList, { items: [ ...targetList.items, newItem ]})
  })
}

export function removeItemFromList(lists, listID, itemID) {
  return updateItemInArray(lists, listID, (targetList) => {
    return updateObject(targetList, { items: targetList.items.filter(item => item.id !== itemID)})
  })
}

export function updateItem(lists, listID, itemID, newItemData) {
  return updateItemInArray(lists, listID, (targetList) => {
    const updatedItems = updateItemInArray(targetList.items, itemID, (oldItem) => {
      return updateObject(oldItem, newItemData);
    });

    return updateObject(targetList, { items: updatedItems })
  })
}



// This is a stub for now
// Eventually this will be replaced with some kind of async storage solution or something

import List from './../model/List'

// Read json string from file
const jsonData = require('../../assets/data/demoList.json');

const appData = List.deserialize(jsonData);

export {
  appData
};



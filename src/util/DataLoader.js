
// This is a stub for now
// Eventually this will be replaced with some kind of async storage solution or something

import List from './../model/List'
import Topic from './../model/Topic'
import Tool from './../model/Tool'
import Vocab from './../model/Vocab'

// Read json string from file
const jsonData = require('../../assets/data/demoList.json');

const demoTopicsJson = require('../../assets/data/demoTopics.json');
const demoToolsJson = require('../../assets/data/demoTools.json');
const demoVocabJson = require('../../assets/data/demoVocab.json');

const appData = List.deserialize(jsonData);

const demoTopics = List.deserialize(demoTopicsJson, Topic.deserialize);
const demoTools = List.deserialize(demoToolsJson, Tool.deserialize);
const demoVocab = List.deserialize(demoVocabJson, Vocab.deserialize);

console.log(demoTopics);
console.log(demoTools);
console.log(demoVocab);


export {
  appData,
  demoTopics,
  demoTools,
  demoVocab,
};



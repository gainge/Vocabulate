import Item from './Item'


export default class List {
  constructor(id, title, creationDate, items = []) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;

    // Initialize the items from json data
    this.items = items;

    // Now we done?
  }

  static deserialize(json) {
    return new List(json.id, json.title, json.creationDate, json.items);
  }
}










import Item from './Item'


export default class List {
  constructor(id, title, creationDate, items = [], itemDeserialization = undefined) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;

    // Initialize the items from json if applicable
    if (itemDeserialization) {
      this.items = [];

      items.forEach((item) => this.items.push(itemDeserialization(item)));
    } else {
      this.items = items;
    }

    // Now we done?
  }

  static deserialize(json, itemDeserialization = undefined) {
    return new List(json.id, json.title, json.creationDate, json.items, itemDeserialization);
  }
}










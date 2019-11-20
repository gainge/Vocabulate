import Item from './Item'


export default class List {
  constructor(id, title, creationDate, items) {
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;

    // Initialize the items from json data
    this.items = [];
    // Also count up the initial number of learned, heard, etc
    this.numLearned = 0;
    this.numHeard = 0;
    this.numUsed = 0;

    if (items) {
      items.forEach(itemJson => {
        let item = Item.deserialize(itemJson);
        this.items.push(item);

        if (item.learned) {
          this.numLearned++;
        }

        if (item.heard) {
          this.numHeard++;
        }

        if (item.used) {
          this.numUsed++;
        }
      });
    }

    // Now we done?
  }

  static deserialize(json) {
    return new List(json.id, json.title, json.creationDate, json.items);
  }
}











export default class Item {
  constructor(id, term, definition, learned = false, heard = false, used = false) {
    this.id = id;
    this.term = term;
    this.definition = definition;
    this.learned = learned;
    this.heard = heard;
    this.used = used;
  }


  static deserialize(json) {
    return new Item(json.id, json.term, json.definition, json.learned, json.heard, json.used);
  }


}













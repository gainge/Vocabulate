
export default class Vocab {

  constructor(id, term, definition) {
    this.id = id;
    this.term = term;
    this.definition = definition;
  }

  static deserialize(json) {
    return new Vocab(json.id, json.term, json.definition);
  }

}

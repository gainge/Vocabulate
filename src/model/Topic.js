
export default class Topic {

  constructor(id, body) {
    this.id = id;
    this.body = body;
  }

  static deserialize(json) {
    return new Topic(json.id, json.body);
  }

}

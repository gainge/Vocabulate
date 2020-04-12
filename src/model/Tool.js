
export default class Tool {

  // TODO: maybe think about adding array of examples?  As opposed to just keeping in body?
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }

  static deserialize(json) {
    return new Tool(json.id, json.title, json.body);
  }

}

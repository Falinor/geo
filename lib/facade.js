class Facade {
  constructor(Schema) {
    this.Schema = Schema;
  }

  findOne(query) {
    return this.Schema.findOne(query);
  }

  findById(id) {
    return this.Schema.findById(id);
  }

  findAndCountAll(query) {
    return this.Schema.findAndCountAll(query);
  }

  findAll(query) {
    return this.Schema.findAll(query);
  }
}

module.exports = Facade;

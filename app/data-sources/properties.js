const { MongoDataSource } = require('apollo-datasource-mongodb');

class PropertiesAPI extends MongoDataSource {
  getProperty(id) {
    return this.findOneById(id);
  }
  getProperties() {
    return this.collection.find().toArray();
  }
}

exports.PropertiesAPI = PropertiesAPI;
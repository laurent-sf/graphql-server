const { MongoDataSource } = require("apollo-datasource-mongodb");

class RestaurantsAPI extends MongoDataSource {
  getRestaurant(id) {
    return this.findOneById(id);
  }
  async getRestaurants() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return this.collection.find().toArray();
  }

  async incrementRestaurantsVersion() {
    const result = await this.collection.updateMany({}, { $inc: { version: 1 } });
    return result.modifiedCount;
  }
}

exports.RestaurantsAPI = RestaurantsAPI;

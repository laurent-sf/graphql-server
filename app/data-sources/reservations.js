const { MongoDataSource } = require('apollo-datasource-mongodb');

class ReservationsAPI extends MongoDataSource {
  getReservation(id) {
    return this.findOneById(id);
  }
  getReservations() {
    return this.collection.find().toArray();
  }
  
  async bookRoom(args) {
    const result = await this.collection.insertOne({property: args});
    console.log(`New reservation: ${result.insertedId}`);
    return result.insertedId;
  }
}

exports.ReservationsAPI = ReservationsAPI;
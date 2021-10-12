const { MongoDataSource } = require('apollo-datasource-mongodb');

class ReservationsAPI extends MongoDataSource {
  getReservation(id) {
    return this.findOneById(id);
  }
  getReservations() {
    return this.collection.find().toArray();
  }
  
  async createReservation(args) {
    const result = await this.collection.insertOne({restaurant: args});
    console.log(`New reservation: ${result.insertedId}`);
    return this.collection.find().toArray();
  }
}

exports.ReservationsAPI = ReservationsAPI;
const { MongoClient } = require('mongodb');
const property = require('./data/property');
const restaurants = require('./data/restaurants');

const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const url = `mongodb://${mongoHost}:${mongoPort}/hotel`;

const client = new MongoClient(url);

console.log(`Connecting to mongodb`);
client.connect().then(async (_, error) => {
  if (error != null) {
    console.log(error);
  } else {
    console.log(`🚀 Connected to mongodb`);
    console.log('Seeding data');
    //await client.db().collection('properties').insertOne(property);
    await client.db().collection('restaurants').insertMany(restaurants);
    console.log('Done');
    client.close();
  }
});

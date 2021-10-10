const { ApolloServer } = require("apollo-server");
const { MongoClient } = require("mongodb");
const { ReservationsAPI} =  require('./data-sources/reservations.js');
const { PropertiesAPI} =  require('./data-sources/properties.js');

const typeDefs = require("./typedefs");
const resolvers = require('./resolvers');

// MongoDB
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const url = `mongodb://${mongoHost}:${mongoPort}/hotel`;
const client = new MongoClient(url);

console.log(`Connecting to ${url}`);
client.connect().then((_,error) => {
  if (error != null) {
    console.log(error);
  } else {
    console.log(`🚀 Connected to ${url}`);
    //console.log('Seeding data');
    //client.db().collection('properties').insertOne({name: 'Aria'});
  }
});

// ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
  dataSources: () => ({
    reservationsAPI: new ReservationsAPI(client.db().collection('reservations')),
    propertiesAPI: new PropertiesAPI(client.db().collection('properties'))
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
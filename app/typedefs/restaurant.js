const { gql } = require("apollo-server");

const restaurant = gql`
  type Restaurant {
    _id: ID!
    name: String!
    description: String!
    hours: String!
    photo: String!
    version: Int!
  }

  extend type Query {
    restaurant(id: ID!): Restaurant
    restaurants: [Restaurant]
  }

  extend type Mutation {
    incrementRestaurantsVersion: Int
  }
`;

module.exports = restaurant;

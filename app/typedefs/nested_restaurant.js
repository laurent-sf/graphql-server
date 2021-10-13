const { gql } = require("apollo-server");

const nestedRestaurant = gql`
  type NestedRestaurant {
    _id: ID!
    name: String!
    photo: String!
  }
`;

module.exports = nestedRestaurant;

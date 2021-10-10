const { gql } = require("apollo-server");

const property = gql`
  type Property {
    _id: ID!
    name: String!
  }

  extend type Query {
    property(id: ID!): Property
    properties: [Property]
  }
`;

module.exports = property;

const { gql } = require("apollo-server");

const root = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

module.exports = root;

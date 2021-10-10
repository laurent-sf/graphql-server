const { gql } = require("apollo-server");

const reservation = gql`
  type Reservation {
    _id: ID!
    property: Property!
  }
  
  extend type Query {
    reservation(id: ID!): Reservation
    reservations: [Reservation!]
  }

  extend type Mutation {
    bookRoom(pid: ID!): ID
    cancelReservation(id: ID!): Boolean!
  }
`;

module.exports = reservation;

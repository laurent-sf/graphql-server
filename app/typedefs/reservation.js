const { gql } = require("apollo-server");

const reservation = gql`
  type Reservation {
    _id: ID!
    restaurant: NestedRestaurant!
  }

  extend type Query {
    reservation(id: ID!): Reservation
    reservations: [Reservation!]
  }

  extend type Mutation {
    createReservation(restaurantId: ID!): [Reservation]
  }
`;

module.exports = reservation;

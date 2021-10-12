module.exports = {
  Query: {
    restaurant: (_, { id }, { dataSources: { restaurantsAPI } }) =>
      restaurantsAPI.getRestaurant(id),
    restaurants: (_, __, { dataSources: { restaurantsAPI } }) =>
      restaurantsAPI.getRestaurants(),

    reservation: (_, { id }, { dataSources: { reservationsAPI } }) =>
      reservationsAPI.getReservation(id),
    reservations: (_, __, { dataSources: { reservationsAPI } }) =>
      reservationsAPI.getReservations(),
  },
  Mutation: {
    createReservation: async (
      _,
      { restaurantId },
      { dataSources: { restaurantsAPI, reservationsAPI } }
    ) => {
      const restaurant = await restaurantsAPI.getRestaurant(restaurantId);
      if(restaurant){
        return reservationsAPI.createReservation(restaurant);
      }
    },
    incrementRestaurantsVersion: async (
      _,
      __,
      { dataSources: { restaurantsAPI } }
    ) => {
      return restaurantsAPI.incrementRestaurantsVersion();
    },
  },
};

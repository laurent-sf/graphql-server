module.exports = {
  Query: {
    reservation: (_, { id }, { dataSources: { reservationsAPI } }) =>
      reservationsAPI.getReservation(id),
    reservations: (_, __, { dataSources: { reservationsAPI } }) =>
      reservationsAPI.getReservations(),
    
    property: (_, { id }, { dataSources: { propertiesAPI } }) =>
      propertiesAPI.getProperty(id),
    properties: (_, __, { dataSources: { propertiesAPI } }) =>
      propertiesAPI.getProperties(),
  },
  Mutation: {
    bookRoom: async (
      _,
      { pid },
      { dataSources: { reservationsAPI, propertiesAPI } }
    ) => {
      const property = await propertiesAPI.getProperty(pid);
      return reservationsAPI.bookRoom(property);
    },
  },
};

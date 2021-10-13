const reservation = require("./reservation");
const restaurant = require("./restaurant");
const nestedRestaurant = require("./nested_restaurant");
const root = require("./root");

const schemaArray = [reservation, restaurant, nestedRestaurant, root];

module.exports = schemaArray;

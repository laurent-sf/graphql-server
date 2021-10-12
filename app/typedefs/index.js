const reservation = require("./reservation");
const restaurant = require("./restaurant");
const root = require("./root");

const schemaArray = [reservation, restaurant, root];

module.exports = schemaArray;

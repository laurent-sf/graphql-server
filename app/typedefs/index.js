const reservation = require("./reservation");
const property = require("./property");
const root = require("./root");

const schemaArray = [reservation, property, root];

module.exports = schemaArray;

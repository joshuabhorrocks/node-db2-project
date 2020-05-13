const knex = require('knex');

const knexfile = require("../knexfile");

const environment = process.env.NODE_ENV || "development"; // undefined|production

module.exports = knex(knexfile[environment])
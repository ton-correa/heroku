const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile.development || knexfile.production);

module.exports = knex;
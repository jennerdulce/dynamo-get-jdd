'use strict';

const dynamoose = require('dynamoose');
const clientsSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String
})

module.exports = dynamoose.model('clients', clientsSchema)
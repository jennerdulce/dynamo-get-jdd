'use strict';

const clientsModel = require('./schema.js');


exports.handler = async (event) => {
  console.log('EVENT', event)
  try {
    const list = await clientsModel.scan().exec()
    const data = JSON.stringify(list)
    return {
      statusCode: 201,
      body: data
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    }
  }
}
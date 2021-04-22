'use strict';

const clientsModel = require('./schema.js');


exports.handler = async (event) => {
  console.log('EVENT', event)
  try {
    if (event.queryStringParameters) {
      console.log(event.queryStringParameters.id)
      const id = event.queryStringParameters.id
      let user = await clientsModel.get({ "id": id })
      const data = JSON.stringify(user)
      return {
        statusCode: 201,
        body: data
      }
    } else {
      const list = await clientsModel.scan().exec()
      const data = JSON.stringify(list)
      return {
        statusCode: 201,
        body: data
      }
    }

  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    }
  }
}
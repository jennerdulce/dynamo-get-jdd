'use strict';

const clientsModel = require('./schema.js');


exports.handler = async (event) => {
  console.log('EVENT', event)
  try {
    if (!event.body) {
      const list = await clientsModel.scan().exec()
      const data = JSON.stringify(list)
      return {
        statusCode: 201,
        body: data
      }
    } else {
      const body = JSON.parse(event.body)
      if (body.id) {
        let user = await clientsModel.get({ "id": body.id })
      } else if (body.name) {
        let user = await clientsModel.get({ "name": body.name })
      } else if (body.phone) {
        let user = await clientsModel.get({ "phone": body.phone })
      }
      return {
        statusCode: 201,
        body: user
      }
    }

  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    }
  }
}
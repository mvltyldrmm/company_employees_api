

const mongoose = require('mongoose');
const db = require('../mongodb/db')();

const ManagementModel = require("../models/Management");

exports.handler = async (event, context) => {
  
  const management = new ManagementModel(JSON.parse(event.body));
  await management.save();


  return {
    statusCode: 200,
    body: event.body
  };
};
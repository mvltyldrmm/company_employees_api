

const mongoose = require('mongoose');
const db = require('../mongodb/db')();

const InternModel = require("../models/Intern");

exports.handler = async (event, context) => {
  
  const intern = new InternModel(JSON.parse(event.body));
  await intern.save();


  return {
    statusCode: 200,
    body: event.body
  };
};
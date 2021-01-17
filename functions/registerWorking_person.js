

const mongoose = require('mongoose');
const db = require('../mongodb/db')();

const Working_personmodel = require("../models/Working_person");

exports.handler = async (event, context) => {
  
  const working_person = new Working_personmodel(JSON.parse(event.body));
  await working_person.save();


  return {
    statusCode: 200,
    body: event.body
  };
};
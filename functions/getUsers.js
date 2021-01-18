

const InternModel = require("../models/Intern");
const db = require('../mongodb/db')();


exports.handler =  async (event, context) => {
  
  const promise = InternModel.find({});
  promise.then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  })


  return {
    statusCode: 200,
    body: JSON.stringify({message:"data"})
 };
  


  
  
};
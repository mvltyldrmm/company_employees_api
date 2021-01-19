

const ManagementModel = require("../models/Management");
const db = require('../mongodb/db')();

exports.handler = async function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false //+


    if(event.httpMethod =="GET"){
        const data = await ManagementModel.find({});

        return callback(null,{
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
       })
    }
    else{
        return { statusCode: 405, body: "Method Not Allowed" };

    }

    //  InternModel.find({}).then((response) => {
    //      return callback(null,{
    //          statusCode: 200,
    //          headers: { 'Content-Type': 'application/json' },
    //          body: JSON.stringify(response)
    //      })
    //  }).catch(err => {

    //  })


    
}



const InternModel = require("../models/Intern");
const db = require('../mongodb/db')();

exports.handler = async function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false //+


    const data = JSON.parse(event.body);

    console.log(data);

    const promise = await InternModel.find({});


    return callback(null,{
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(promise)
    })


    // InternModel.find({}).then((response) => {
    //     return callback(null,{
    //         statusCode: 200,
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(response)
    //     })
    // }).catch(err => {

    // })


    
}



const ManagementModel = require("../models/Management");
const db = require('../mongodb/db')();

exports.handler = async function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false //+


    if(event.httpMethod =="POST"){
        const createManagement = new ManagementModel(JSON.parse(event.body));

        const result = createManagement.save();
        
        await result.then((data)=>{
            return callback(null,{
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(createManagement)
           })
        }).catch((err)=>{
            return callback(null,{
                statusCode: 500,
                headers: { 'Content-Type': 'application/json' },
                body: "Internal Server Error"
           })
        })


        
        
    }
    else{
        return { statusCode: 405, body: "Method Not Allowed" };

    }




    // InternModel.find({}).then((response) => {
    //     return callback(null,{
    //         statusCode: 200,
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(response)
    //     })
    // }).catch(err => {

    // })


    
}

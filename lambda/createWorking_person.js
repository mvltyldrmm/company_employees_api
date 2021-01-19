

const Working_pModel = require("../models/Working_person");
const db = require('../mongodb/db')();

exports.handler = async function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false //+


    if(event.httpMethod =="POST"){
        const createWorkin_p = new Working_pModel(JSON.parse(event.body));

        const result = createWorkin_p.save();
        
        await result.then((data)=>{
            return callback(null,{
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(createWorkin_p)
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

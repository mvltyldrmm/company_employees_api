

const InternModel = require("../models/Intern");
const db = require('../mongodb/db')();

exports.handler = async function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false //+


    if(event.httpMethod =="POST"){
        const createIntern = new InternModel(JSON.parse(event.body));

        const result = createIntern.save();
        
        await result.then((data)=>{
            return callback(null,{
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(createIntern)
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

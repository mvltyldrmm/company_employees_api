

const ManagementModel = require("../models/Management");
const db = require('../mongodb/db')();

exports.handler = async function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false //+


    if(event.httpMethod =="DELETE"){

        const result = ManagementModel.findByIdAndRemove(event.headers.id);
        

        await result.then((data)=>{
            if(!data){
                var result_string = "Internal Server Error"
            }
            else{
                var result_string = "Succesfully"
            }
            return callback(null,{
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: result_string
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





    
}



    


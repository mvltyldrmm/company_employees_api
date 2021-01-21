

const WorkingpModel = require("../models/Working_person");
const db = require('../mongodb/db')();

exports.handler = async function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false //+


    if(event.httpMethod =="DELETE"){

        const result = WorkingpModel.findByIdAndRemove(event.headers.id);
        

        await result.then((data)=>{
            if(!data){
                var result_string = "Internal Server Error";
                var status_code = 500;
            }
            else{
                var result_string = "Succesfully"
                var status_code = 200;
            }
            return callback(null,{
                statusCode: status_code,
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



    


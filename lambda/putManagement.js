

const ManagementModel = require("../models/Management");
const db = require('../mongodb/db')();

exports.handler = async function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false //+


    if(event.httpMethod =="PUT"){
        

        const result = ManagementModel.findByIdAndUpdate(
            event.headers.id,
            JSON.parse(event.body),
            {
                new:true
            }
        );

        console.log("id:" + event.headers.id);
        console.log(event.body);

        
        await result.then((data)=>{
            if(!data){
                var result_string = "Internal Server Error"
            }
            else{
                var result_string = JSON.stringify(data);
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

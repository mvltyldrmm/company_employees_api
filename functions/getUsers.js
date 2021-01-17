

const InternModel = require("../models/Intern");

exports.handler = function(event,context,callback){

    const promise = InternModel.find({ }).limit(10);
    
    callback(null, {
        statusCode:200,
        body:'Hello ' + promise.then((data)=>{
            res.json(data);
          }).catch((err)=>{
            res.json(err);
          })

    });
}
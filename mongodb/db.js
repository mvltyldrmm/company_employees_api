const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true });
    mongoose.connection.on('open',()=>{
        console.log('MONGODB: Baglandi');
    });
    mongoose.connection.on('error',(err)=>{
         console.log('MONGODB: Error',err);
    });

    mongoose.Promise = global.Promise;
    
};

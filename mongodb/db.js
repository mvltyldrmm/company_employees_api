const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect('mongodb+srv://mvltyldrm:rNs0pgZfauw9bwl8@cluster0.ketie.mongodb.net/company-employees-api?retryWrites=true&w=majority',{ useNewUrlParser: true });
    mongoose.connection.on('open',()=>{
        console.log('MONGODB: Baglandi');
    });
    mongoose.connection.on('error',(err)=>{
         console.log('MONGODB: Error',err);
    });

    mongoose.Promise = global.Promise;
    
};

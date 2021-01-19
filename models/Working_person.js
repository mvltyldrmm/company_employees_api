const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Working_personSchema = new Schema({
    Name:{
        type:String,
        required: true
    },
    Surname:{
        type:String,
        required: true
    },
    Bio:String,
    Department:String,
    Working_year:Number,
    createdAt:{
        type:Date,
        default:Date.now
    }
    
});

module.exports = mongoose.model('Working_person',Working_personSchema);


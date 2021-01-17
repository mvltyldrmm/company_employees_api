const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InternSchema = new Schema({
    Name:String,
    Surname:String,
    School_Department:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    Class_year:Number
});

module.exports = mongoose.model('Intern',InternSchema);


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ManagementSchema = new Schema({
    Name:{
        type:String,
        required: true
    },
    Surname:{
        type:String,
        required: true
    },
    Bio : String,
    Department: String,
    createdAt:{
        type:Date,
        default:Date.now
    }
});


module.exports = mongoose.model('Management',ManagementSchema);

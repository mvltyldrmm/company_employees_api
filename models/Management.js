const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ManagementSchema = new Schema({
    name : String,
    Surname: String,
    Bio : String,
    Department: String,
    createdAt:{
        type:Date,
        default:Date.now
    }
});


module.exports = mongoose.model('Management',ManagementSchema);

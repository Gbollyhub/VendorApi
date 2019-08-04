//This is the database model which is exported to the controller folder for fuctions to use

const mongoose = require('mongoose')

const VendorSchema = new mongoose.Schema({
    //u can changed the variables though
    name: String,
    mname: String,
    number: String,
    email: String,
    poscount: Number,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("vendor", VendorSchema)
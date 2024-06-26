//while defining models here also we need instance of mongoose
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 4.9
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },

    company:{
        type: String,
    
    }
})

//creating collection now
const Userproduct = mongoose.model('Product' , productSchema)
module.exports = Userproduct;
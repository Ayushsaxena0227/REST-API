const mongoose = require("mongoose");

const connectdb = (uri)=>{
    console.log("connected to database")
    return mongoose.connect(uri);
}

module.exports = connectdb;
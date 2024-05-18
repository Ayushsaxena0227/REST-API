// abhi ise hum app.js se nahi jod rahe its just these two files game
require("dotenv").config();
const connectdb = require("./db/connect");
const Product = require("./models/product");
const productjson = require("./products.json");
const start = async ()=>{
    try {
        await connectdb(process.env.MONGODB_URL);
        //once connection established i need to store data
        await Product.create(productjson)
        console.log("Data inserted successfully");
    } catch (error) {
        console.log(error)
    }
}
start();
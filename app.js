require("dotenv").config();
const express = require("express");
const app = express();

const connectdb = require("./db/connect");
const products_routes = require("./routes/products");
const PORT = process.env.PORT || 8000;
app.get("/", (request, response) => {
  response.send("Hello World");
});

//middleware (where u wanana go, route)
app.use("/api/products" , products_routes);

const start = async () => {
  try {
    await connectdb(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

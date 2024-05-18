//nwo hume in messages ki jagah jo hmare db me h vo data window pr dikhana h to uske liye we ll use our model.model has lots of power
const product = require("../models/product");
const getallproducts = async (request, response) => {
  // response.status(200).json({msg: "I am getAllproducts"});
  const { company, name, select ,sort } = request.query;
  const queryobject = {};

  if (company) {
    queryobject.company = company;
  }
  if (name) {
    queryobject.name = { $regex: name, $options: "i" };
  }

  let apidata = product.find(queryobject);
//   const mydata = await product.find(queryobject).sort("name");
if(sort){
    let sortfix = sort.split(",").join(" ");
    apidata = apidata.sort(sortfix);
}

if(select){
    let selectfix = select.split(",").join(" ");
    apidata = apidata.select(selectfix);
}

//pagination
let page = Number(request.query.page) || 1;
let limit = Number(request.query.limit) || 10;

let skip = (page -1) * limit;

apidata = apidata.skip(skip).limit(limit);

//   const mydata = await product.find(queryobject).sort("name").select("name");
  const mydata = await product.find(queryobject).sort("name")
  // response.status(200).json({mydata})
  response.status(200).json({ mydata });
  //     These conditional statements check if company or name are present in the query parameters:
  // If company is provided, it's added to the queryobject.
};

const getallproductsTesting = async (request, response) => {
  // const mydata = await product.find({name: "watch"});
  const mydata = await product.find(request.query);
  await product.deleteMany();
  response.status(200).json({ mydata });
};

module.exports = { getallproducts, getallproductsTesting };

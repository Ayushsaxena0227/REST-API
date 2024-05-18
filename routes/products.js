//again connect iwht express . routes means kis kis path p jana he and cotrollers means us path mkya kaya karna he
const express = require("express");
const router = express.Router();
//now importing (requiring) my functions
const {getallproducts , getallproductsTesting} = require("../controllers/products");


router.route("/").get(getallproducts);
router.route("/testing").get(getallproductsTesting);

module.exports = router;
const path = require("path");

const express = require("express");

const rootDir = require("../util/path.js");
const productsController = require('../controller/products.js');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
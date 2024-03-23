const path = require("path");

const express = require("express");

const rootDir = require("../util/path.js");
const productsController = require('../controller/products.js');
const contactUsController = require('../controller/contactUs.js');
const successController = require('../controller/success.js');

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

router.get('/contact-us', contactUsController.contactUs);

router.post('/success', successController.success);

module.exports = router;
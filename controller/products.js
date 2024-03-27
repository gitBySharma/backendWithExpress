const path = require("path");

const express = require("express");

const rootDir = require("../util/path.js");
const Product = require("../models/product.js");

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save()
        .then((result) => {
            console.log("Product saved successfully");
            res.redirect('/');
        }).catch((err) => {
            console.log(err);
        });
}

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    Product.fetchAllProducts()
        .then((products) => {
            console.log(products)
        })
        .catch((err) => {
            console.log(err)
        });
}
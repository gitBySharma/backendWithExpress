const path = require("path");

const express = require("express");

const rootDir = require("../util/path.js");

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
}

exports.postAddProduct = (req, res, next) => {
    //console.log(req.body);  //print the object as it is 
    const body = req.body;
    for (let key in body) {   //printing the object properties separately
        console.log(key + ":", body[key]);
    }

    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}
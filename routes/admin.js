const path = require("path");

const express = require("express");

const rootDir = require("../util/path.js");

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
});

router.post('/add-product', (req, res, next) => {
    //console.log(req.body);  //print the object as it is 
    const body = req.body;
    for (let key in body) {   //printing the object properties separately
        console.log(key + ":", body[key]);
    }

    res.redirect('/');
});

router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

router.post('/success', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'submitQuery.html'));
});

module.exports = router;
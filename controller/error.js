const path = require("path");

const express = require("express");

const rootDir = require("../util/path.js");

exports.errorPage = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'pageNotFound.html'));  
}
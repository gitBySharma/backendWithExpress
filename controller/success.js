const path = require("path");

const express = require("express");

const rootDir = require("../util/path.js");

exports.success = (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'submitQuery.html'));
}
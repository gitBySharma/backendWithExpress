const path = require("path");

const express = require("express");

const rootDir = require("../util/path.js");

exports.contactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contactUs.html"));
}
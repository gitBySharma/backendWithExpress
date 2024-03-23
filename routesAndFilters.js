const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const rootDir = require("./util/path.js");
const errorController = require('./controller/error.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));  //provides read-only access to public folder

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//404 error handling middleware
app.use('/', errorController.errorPage);

app.listen(3000, () => console.log("Server is live...."));
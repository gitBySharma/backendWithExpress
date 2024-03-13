const express = require("express");

const app = express();
app.use((rew, res, next) =>{
    console.log("In the middleware");
    next();
});

app.use((rew, res, next) =>{
    console.log("In the 2nd middleware");
    res.send('<h1>Hello! from express JS</h1>');
});

app.listen(3000);
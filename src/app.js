const express = require('express');
const app = express();

app.get('/', function(req, res) {
   res.send("Hello and Namaste to IIT-J and family");
});

module.exports = app;

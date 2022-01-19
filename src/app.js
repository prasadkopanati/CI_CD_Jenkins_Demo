const express = require('express');
const app = express();

app.get('/', function(req, res) {
   res.send("Hello to IIT-J");
});

module.exports = app;

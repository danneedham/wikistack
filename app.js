const express = require('express');
const layout = require('./views/layout.js');
const app = express();

app.use(express.static('views'));

app.get('/', function(req, res) {
  res.send(layout(''));
});

app.listen(3000);

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./configs');

var app = express();

// TODO: for DEMO.
app.get('/', function (req, res) {
  console.log(req);
  res.send('Hello World!');
});

app.listen(config.port, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
module.exports = app;

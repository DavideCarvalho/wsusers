/*jshint esversion: 6 */
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
  var app = express();

  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
  });

  consign()
    .include('models')
    .then('api')
    .then('routes')
    .into(app);

  return app;
};

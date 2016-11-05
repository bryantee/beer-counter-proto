const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Beer = require('./model/beer-model');

const app = express();

app.use(bodyParser.json());

app.post('/beers', function(req, res) {
  let newBeer = {
    beerName: req.body.name,
    date: new Date()
  };

  Beer.create(newBeer);
  res.status(201).json(newBeer);
  console.log('Beer saved.');
});

mongoose.connect('mongodb://localhost/beer');
app.listen(3000, function() {
  console.log('Listening on port 3000');
});

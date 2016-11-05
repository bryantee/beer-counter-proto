'use strict';

const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
  beerName: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;

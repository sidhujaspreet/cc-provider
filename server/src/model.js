'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var creditCards = new Schema({
  name: {
    type: String
  },
  number: {
    type: Number
  },
  limit: {
    type: Number
  },
  balance: {
    type: Number
  },
});

module.exports = {
  CreditCards: mongoose.model('credit-cards', creditCards)
};

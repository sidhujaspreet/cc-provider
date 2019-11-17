'use strict';

const model = require('./model');
var Collection;

function setDb() {
  Collection = model.CreditCards;
};

exports.getAllCreditCards = function (req, res) {
  setDb();
  Collection.find({}, function (err, data) {
    if (err)
      res.status(500).send(err);
    res.status(200).json(data);
  });
};

exports.addCreditCard = function (req, res) {
  setDb();
  Collection.create(req.body, function (err, data) {
    if (err)
      res.status(500).send(err);
    res.status(200).json(data);
  });
};

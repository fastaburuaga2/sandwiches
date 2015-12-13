var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Sandwich = require('models/sandwich');

var User = new Schema({
  sandwiches: [Sandwich],
  sanwichescount: { type: Number, default: 0 }
});

module.exports = mongoose.model('user', User);


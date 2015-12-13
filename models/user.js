var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  sandwiches: [ObjectId],
  sanwichescount: { type: Number, default: 0 }
});

module.exports = mongoose.model('user', User);


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  sandwiches: [ObjectId]
});

module.exports = mongoose.model('user', User);


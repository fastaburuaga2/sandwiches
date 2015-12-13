var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = new Schema({
  userid: Objectid,
  sandwiches: [{ type: Schema.Types.ObjectId, ref: 'Sandwich' }]
});

module.exports = mongoose.model('order', Order);


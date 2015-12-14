var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Sandwich = require('./sandwich');

var User = new Schema({
	username: String,
    password: { 
        type: String, 
        required: true
    },
	sandwiches: [Sandwich],
	sanwichescount: { type: Number, default: 0 }
});

module.exports = mongoose.model('user', User);


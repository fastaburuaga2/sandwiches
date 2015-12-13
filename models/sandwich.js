var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sandwich = new Schema({
    userid: ObjectId,
    orderCount: Number,
    breadtype: {
      wheat: Boolean,
      oat: Boolean,
      italian: Boolean,
      parmesano: Boolean
    },
    halfSize: Boolean,
    meats: {
      chicken: Boolean,
      italian: Boolean,
      turkey: Boolean,
      tuna: Boolean,
      meatball: Boolean,
      ham: Boolean
    },
    vegetables: {
      lettuce: Boolean,
      tomatoes: Boolean,
      cucumbers: Boolean,
      pickles: Boolean,
      peppers: Boolean,
      olives: Boolean,
      onions: Boolean,
      jalapenos: Boolean
    },
    cheese: {
      swiss: Boolean,
      cheddar: Boolean,
      american: Boolean,
      mozzarella: Boolean
    },
    sauce: {
      mustard: Boolean,
      onion: Boolean,
      mayo: Boolean,
      oliveoil: Boolean,
      chilli: Boolean,
      ketchup: Boolean,
      bbq: Boolean,
      ranch: Boolean
    },
    instruction: String
});

module.exports = mongoose.model('sandwich', Sandwich);

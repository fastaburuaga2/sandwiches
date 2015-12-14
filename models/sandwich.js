var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sandwich = new Schema({
    orderCount: { type: Number, default: 0 },
    breadtype: {
      wheat: { type: Boolean, required: true },
      oat: { type: Boolean, required: true },
      italian: { type: Boolean, required: true },
      parmesano: { type: Boolean, required: true }
    },
    halfSize: {type: Boolean, required: true},
    meats: {
      chicken: { type: Boolean, required: true },
      italian: { type: Boolean, required: true },
      turkey: { type: Boolean, required: true },
      tuna: { type: Boolean, required: true },
      meatball: { type: Boolean, required: true },
      ham: { type: Boolean, required: true }
    },
    vegetables: {
      lettuce: { type: Boolean, required: true },
      tomatoes: { type: Boolean, required: true },
      cucumbers: { type: Boolean, required: true },
      pickles: { type: Boolean, required: true },
      peppers: { type: Boolean, required: true },
      olives: { type: Boolean, required: true },
      onions: { type: Boolean, required: true },
      jalapenos: { type: Boolean, required: true }
    },
    cheese: {
      swiss: { type: Boolean, required: true },
      cheddar: { type: Boolean, required: true },
      american: { type: Boolean, required: true },
      mozzarella: { type: Boolean, required: true }
    },
    sauce: {
      mustard: { type: Boolean, required: true },
      onion: { type: Boolean, required: true },
      mayo: { type: Boolean, required: true },
      oliveoil: { type: Boolean, required: true },
      chilli: { type: Boolean, required: true },
      ketchup: { type: Boolean, required: true },
      bbq: { type: Boolean, required: true },
      ranch: { type: Boolean, required: true }
    },
    instructions: String,
    name: String
});

module.exports = Sandwich;

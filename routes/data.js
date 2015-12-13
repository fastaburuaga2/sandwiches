var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Sandwich = require('../models/sandwich');



// '/create, object'
router.post('/create', function(req, res, next) {
  // get the user
  //
  // add the sandwhich
  
  // update user
  req.session.username
  
  var sandwhich = new Sandwich(req.body.sandwich);




});

module.exports = router;

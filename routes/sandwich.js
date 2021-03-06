var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');
var Sandwich = require('../models/sandwich');

// '/api/create, object'
router.post('/create', function(req, res) {

	console.log(req.body.sandwich);
  	User.findOne({ username: req.session.username }, function (err, user) {
		if (err) { 
			res.status(500).json({ error: 'Server Error' }); 
			console.log('error finding user');
			return
		}
		if (!user) {
			res.status(401).json({ error: 'Authentication Failed' });
			return
		}

		// var sandwich = new Sandwich(req.body.sandwich);

		user.sandwiches.push(req.body.sandwich);

		user.save(function (err) {
			if (err) { 
				res.status(500).json({ error: 'Database Error' }); 
				console.log('error saving sandwich: ' + err);
				return
			}
		  	res.json({ message: "Sandwich created!"});
		});
	});
});

router.put('/update', function(req, res) {
  	var sandwich = new Sandwich(req.body.sandwich);
	User.findOneAndUpdate(
	    { username: req.session.username , "sandwiches._id": req.body.sandwich.sandwichID },
	    { 
	        "$set": {
	            "sandwiches.$": sandwich
	        }
	    },
	    function(err,user) {
	    	if (err) { res.status(500).json({ error: 'Server Error' }); }
	    	if (!user) {
				res.status(401).json({ error: 'Authentication Failed' });
			}
	    	res.json({ message: "Sandwich updated!"});
	    }
	);
});

/*
router.get('/:sandwichID', function(req, res) {
  	var sandwichID = req.params.sandwichID;

  	User.findOne({ username: req.session.username }, function (err, user) {
		if (err) { res.status(500).json({ error: 'Server Error' }); }
		if (!user) {
			res.status(401).json({ error: 'Authentication Failed' });
		}
		res.json({ sandwich: user.sandwiches.id(sandwichID) });
	});
});
*/

router.get('/all', function(req, res) {
  	User.findOne({ username: req.session.username }, function (err, user) {
		if (err) { 
			res.status(500).json({ error: 'Server Error' }); 
			return 
		}
		if (!user) {
			res.status(401).json({ error: 'Authentication Failed' });
			return
		}
		res.json({ sandwiches: user.sandwiches});
	});
});

router.put('/order', function(req, res) {
  	var sandwiches = req.params.sandwiches;

	User.findOne({ username: req.session.username}, function (err,user) {
	    	if (err) { res.status(500).json({ error: 'Server Error' }); }
	    	if (!user) {
				res.status(401).json({ error: 'Authentication Failed' });
			}
			// loop through sandwiches
			for (var i = 0; i < sandwiches.length; i++) {
				var sandwich = sandwiches[i];
				user.update({"sandwiches._id": sandwich._id}, 
							{ "$set": {"sandwiches.$.orderCount": sandwich.orderCount} },
							false,
							true);
			};
	    	res.json({ message: "Order updated!"});
	    }
	);
});

router.delete('/delete/:sandwichID', function(req, res) {
  	var sandwichID = req.params.sandwichID;

  	User.findOne({ username: req.session.username }, function (err, user) {
		if (err) { 
			res.status(500).json({ error: 'Server Error' }); 
			return;
		}
		if (!user) {
			res.status(401).json({ error: 'Authentication Failed' });
			return;
		}
		user.sandwiches.id(sandwichID).remove(); 
		user.save(function (err) {
			if (err) {
				res.status(500).json({ error: 'Server Error' });
				return;
			}
			console.log("successfully deleted");
			res.json({ message: "Sandwich successfully deleted!" });
		});
	});
});

module.exports = router;

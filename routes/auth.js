var express = require('express');
var router = express.Router();
var path = require('path');
var User = require('../models/user');

router.get('/login', function (req, res) {
	if (req.session.username === undefined) {
		// send login page
		res.sendFile(path.join(__dirname, '../html', 'login.html'));
	} else {
		// redirect to angular app
		res.redirect('/');
	}
});

router.post('/login', function (req, res) {
	if (req.session.username !== undefined) {
		res.redirect('/');
	}

console.log(req.body.username);
console.log(req.body.password);

	var user = new User({
		username: 'fad'	,
    	password: 'fad'
	});

	user.save(function (err) {
	  if (err) console.log(err);
	  // saved!
	  console.log('user created');
	

  	// query mongoose to check if user exists
	User.findOne({ username: req.body.username }, function (err, user) {
		if (err) res.redirect('/login');
		console.log(user);
		if (user==null) {
			res.redirect('/login');
			return;
		}
		console.log(req.body.password == user.password);

		if (req.body.password == user.password) {
			req.session.username = req.body.username;
		  	res.redirect('/');
		} else {
			res.redirect('/login');
		}
	});

	});

});


router.get('/logout', function (req, res) {
    req.session.destroy();
  	res.redirect('/login');
});

router.get('*', function (req, res) {
  if (req.session.username === undefined) {
    // redirect to login page
    res.redirect('/login');
  } else {
    // send angular app
    res.sendFile(path.join(__dirname, '../html', 'index.html'));
  }
});


function createUser (initials) {
	var user = new User({
		username: initials,
    	password: initials
	});

	user.save(function (err) {
	  if (err) return;
	  // saved!
	  console.log('user created');
	})
}



module.exports = router;

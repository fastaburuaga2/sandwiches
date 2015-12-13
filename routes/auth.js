var express = require('express');
var router = express.Router();
var path = require('path');
var User = require('../models/user');

router.get('/login', function (req, res) {
	if (req.session.username === undefined) {
		// send login page
		res.sendFile(path.join(__dirname, 'public', 'login.html'));
	} else {
		// redirect to angular app
		res.redirect('/');
	}
}


router.post('/login', function (req, res) {
	if (req.session.username !== undefined) {
		res.redirect('/');
	}

  	// query mongoose to check if user exists
	User.findOne({ username: req.body.username }, function (err, user) {
		if (err) { res.redirect('/login');
		if (!user) {
			res.redirect('/login');
		}
		if (req.body.password == user.password) {
			req.session.username = req.body.username;
		  	res.redirect('/');
		} else {
			res.redirect('/login');
		}
	});

});

router.get('/logout', function (req, res) {
    req.session.destroy();
  	res.redirect('/login');
});

/*

function createUser (initials) {
	var user = new User({
		username: initials,
    	password: initials
	});

	user.save(function (err) {
	  if (err) return handleError(err);
	  // saved!
	})
}

createUser("jpk");
createUser("ema");
createUser("jkl");
createUser("fad");

*/

module.exports = router;

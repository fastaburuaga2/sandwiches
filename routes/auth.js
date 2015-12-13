var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/login', function (req, res) {
	if (req.session.username !== undefined) {
		// already logged in, send response and return
		res.status(401).json({ error: 'Already logged in' });
	}

  	// query mongoose to check if user exists
	User.findOne({ username: req.body.username }, function (err, user) {
		if (err) { res.status(500).json({ error: 'Server Error' }); }
		if (!user) {
			res.status(401).json({ error: 'Invalid username' });
		}
		if (req.body.password != user.password) {
			req.session.username = req.body.username;
		  	res.json({ username: req.body.username });
		} else {
			res.status(401).json({ error: 'Invalid password' });
		}
	});

});

router.get('/logout', function (req, res) {
  if (req.session.username !== undefined) {
    req.session.destroy();
  	// send response logout success
  	res.json({ message: 'successful logout' });
  } else {
    // no logged in user send error
    res.status(401).json({ error: 'No logged in user' });
  }
});

router.get('/user', function (req, res) {
  if (req.session.username !== undefined) {
  	res.json({ username: req.session.username});
  } else {
    res.json({ message: "User not logged in"});
  }
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

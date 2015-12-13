var express = require('express');
var router = express.Router();

router.post('/login', function (req, res) {
  if (req.session.username !== undefined) {
      // already logged in, send response and return
      res.status(401).json({ error: 'Already logged in' });
      return;
  }

  var users = [
  	{
  		username : "foo",
  		password : "123"
  	},
  	{
  		username : "bar",
  		password : "456"
  	},
  	{
  		username : "baz",
  		password : "789"
  	},
  ];

  // loop through users to see if there was is a matching user
  var matchingUser = false;

  for (var i = 0; i < users.length; i++) {
    if (users[i].username == req.body.username && users[i].password == req.body.password) {
    	matchingUser = true;
    	break;
    }
  };

  if (matchingUser) {
  	// create session
  	req.session.username = req.body.username;
  	res.json({ username: req.body.username });
  } else {
  	// send an authentication failure message
  	res.status(401).json({ error: 'Invalid username or password' });
  }
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

module.exports = router;

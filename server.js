var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var dataAPIRoutes = require('./routes/data');
var authAPIRoutes = require('./routes/auth');

var app = express();

app.use(session({
  secret: 'somesupersecret',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 3600000}
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/* Uncomment when MongoLabURI set

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/test');
mongoose.connection.on('open', function() {
    console.log("Connected to Mongoose!");
});

*/

app.use('/api', dataAPIRoutes);
app.use('/api', authAPIRoutes);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Sandwich app listening at http://%s:%s', host, port);
});
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var sandwichAPIRoutes = require('./routes/sandwich');
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

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/news2345');
//mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://heroku_58m63lsx:cosse626@ds027155.mongolab.com:27155/heroku_58m63lsx');
mongoose.connection.on('open', function() {
    console.log("Connected to Mongoose!");
});

app.use('/', sandwichAPIRoutes);
app.use('/', authAPIRoutes);

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = process.env.PORT || server.address().port;

  console.log('Sandwich app listening at http://%s:%s', host, port);
});


module.exports = app;

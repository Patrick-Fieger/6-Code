// Server initialisierung

const app = require('express')()
  , express = require('express')
  , morgan = require('morgan')
  , bodyParser = require('body-parser')
  , fs = require('fs-extra')
  , moment = require('moment')
  , uuid = require('uuid')
  , port = 5000
  , routes = require('./app/routes')(app)


app.listen(port, function() {
	console.log("Listening on " + port);
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public/build'));
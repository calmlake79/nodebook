const os = require('os');

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send("Send OK!");
});

app.listen( process.env.PORT , function() {
	console.log("Node Started!");
});

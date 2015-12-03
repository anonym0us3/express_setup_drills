var express = require('express');
var app = express();
app.use(express.static('public'));

var randomThingsAroundMe = [
	"Desks",
	"Chairs",
	"Cleaning crew",
	"Coffee machine",
	"Sleeping pods",
	"Fake cacti",
	"Ceiling lights\' reflections in the windows"
];

app.get('/randomThingsAroundMe', function (req, res) {
	res.send(randomThingsAroundMe);
});

var numberz = [1, 2, 3, 7, 13, 42, 31337];

app.get('/numberz', function (req, res) {
	res.send(numberz);
});

var server = app.listen(3000);
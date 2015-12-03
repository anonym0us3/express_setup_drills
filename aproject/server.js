var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var taquerias = [
	{ name: "Ocean Taqueria" },
	{ name: "Taqueria La Cumbre"},
	{ name: "Little Chihuahua"},
	{ name: "Gordo Taqueria"}
];

app.get('/taquerias', function (req, res) {
	res.json(taquerias);
});

var server = app.listen(3000);
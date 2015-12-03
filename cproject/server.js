var express = require('express');
var app = express();
app.use(express.static('public'));

var hypercars = [
	{ make: "Koenigsegg",
	  model: "One:1"
	},
	{ make: "Ferarri",
	  model: "LaFerrari "
	},
	{ make: "McLaren",
	  model: "P1"
	},
	{ make: "Buggati",
	  model: "Veyron Super-Sport"
	}
];

app.get('/hypercars', function (req, res) {
	res.send(hypercars);
});

var beers = [
	"Stella Artois",
	"Blue Moon",
	"Kalnapilis Grand",
	"Svyturys Ekstra"
];

app.get('/beers', function (req, res) {
	res.send(beers);
});

var server = app.listen(3000);
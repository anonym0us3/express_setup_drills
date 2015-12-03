var express = require('express');
var app = express();
app.use(express.static('public'));

var placesIveBeen = [
	{ city: "London",
	  country: "England"
	},
	{ city: "New York City",
	  country: "\'Murica!"
	},
	{ city: "Tel Aviv",
	  country: "Israel"
	},
	{ city: "Riga",
	  country: "Latvia"
	},
	{ city: "Puerto Vallarta",
	  country: "Mexico"
	}
];

app.get('/placesIveBeen', function (req, res) {
	res.send(placesIveBeen);
});

var burritoMinReqs = [
	"Tortilla",
	"Cheese",
	"Meat",
	"Rice",
	"Black beans",
	"More cheese",
	"Sour cream",
	"Guacamole",
	"Salsa",
	"Mild or Hot Sauce"
];

app.get('/burritoMinReqs', function (req, res) {
	res.send(burritoMinReqs);
});

var server = app.listen(3000);
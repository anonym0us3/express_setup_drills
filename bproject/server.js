var express = require('express');
var app = express();
app.use(express.static('public'));

var someFavSongs = [
	{ artist: "Tropicana",
	  track: "Things to Come"
	},
	{ artist: "Hanz Zimmer",
	  track: "He\'s a Pirate (Tiesto Remix)"
	},
	{ artist: "Aram Khachaturian",
	  track: "Masquerade: Waltz"
	},
	{ artist: "The Beatles",
	  track: "For No One"
	},
	{ artist: "Cosmic Gate",
	  track: "Tomorrow - 12 Inch version"
	},
	{ artist: "Bones Domingo",
	  track: "Violate"
	},
	{ artist: "Yngwie Malmsteen",
	  track: "Asylum I: Asylum"
	}
];

app.get('/someFavSongs', function (req, res) {
	res.json(someFavSongs);
});


var icecreams = [
	{ flavour: "Dulce De Leche"},
	{ flavour: "French Vanilla"},
	{ flavour: "Half-Baked"},
	{ flavour: "Green Tea"}
];

app.get('/icecreams', function (req, res) {
	res.send(icecreams);
});

var server = app.listen(3000);
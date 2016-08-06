var express = require('express');
const mtg = require('mtgsdk')
var app = express();

app.get('/', function(req, res) {
    res.send("Hi from mtgslackbot");
});

app.post('/', function(req, res) {
    mtg.card.find(3)
    .then(result => {
            res.send(result.card.name) // "Black Lotus"
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on port " + port + "...");
});

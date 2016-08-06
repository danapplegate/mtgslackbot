var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hi from mtgslackbot");
});

app.post('/', function(req, res) {
    res.send("Hi from mtgslackbot");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on port " + port + "...");
});

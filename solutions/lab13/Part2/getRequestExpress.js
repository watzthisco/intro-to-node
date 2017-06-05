var express = require('express');

var app = express();

app.listen(8080);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/get_request.html');
});

app.get('/getRequest', (req, res) => {
	res.send(req.query.moby + " is the new whale.");
});
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen(8080);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/post_request.html');
});

app.post('/postRequest', (req, res) => {
	res.send(req.body.moby + " is the new whale.");
});
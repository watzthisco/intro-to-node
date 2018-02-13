var express = require('express');

var app = express();

app.listen(8080);

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.get('/another', (req, res) => {
	res.send('this is the another page');
});
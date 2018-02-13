var express = require('express');
var fs = require('fs');
var makeTransformer = require('./makeTransformer');

var app = express();

var mobyReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');

app.listen(8080);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/get_request.html');
});

app.get('/getRequest', (req, res) => {
	var newMoby = req.query.moby;
	var newIshmael = req.query.ishmael;
	var newAhab = req.query.ahab;

	var mobyTransformer = makeTransformer(new RegExp(/Moby\s*Dick/), (newMoby || 'Moby Dick'));
	var ishmaelTransformer = makeTransformer(new RegExp(/Ishmael/), (newIshmael || 'Ishmael'));
	var ahabTransformer = makeTransformer(new RegExp(/Ahab/), (newAhab || 'Ahab'));

	mobyReadStream
		.pipe(mobyTransformer)
		.pipe(ishmaelTransformer)
		.pipe(ahabTransformer)
		.pipe(res);
});
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var makeTransformer = require('./makeTransformer');

var app = express();

var mobyReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen(8080);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/post_request.html');
});

app.post('/postRequest', (req, res) => {
	var newMoby = req.body.moby;
	var newIshmael = req.body.ishmael;
	var newAhab = req.body.ahab;

	var mobyTransformer = makeTransformer(new RegExp(/Moby\s*Dick/), (newMoby || 'Moby Dick'));
	var ishmaelTransformer = makeTransformer(new RegExp(/Ishmael/), (newIshmael || 'Ishmael'));
	var ahabTransformer = makeTransformer(new RegExp(/Ahab/), (newAhab || 'Ahab'));

	mobyReadStream
		.pipe(mobyTransformer)
		.pipe(ishmaelTransformer)
		.pipe(ahabTransformer)
		.pipe(res);
});
///////////////////////////////////////////////////////////////////////////////////////////////////
///Perform the steps from part 3 of the lab on your final project and you will have fulfilled the//
///requirements of this challenge.                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
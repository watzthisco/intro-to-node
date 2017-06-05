var express = require('express');
var fs = require('fs');
var makeTransformer = require('./makeTransformer');

var app = express();

// var mobyReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');

app.listen(8080);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/get_request.html');
});

app.get('/getRequest', (req, res) => {
	var mobyReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');

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

///////////////////////////////////////////////////////////////////////////////////////////////////
///The read stream was previously created outside of the GET request handler.  Remember that this//
///process runs on the server side, so once the stream is exhausted, any other calls to the      //
///stream from any users in any browsers will turn out blank.  By defining the read stream from  //
///within the GET request handler, a new stream is created for every get request.                //
///////////////////////////////////////////////////////////////////////////////////////////////////
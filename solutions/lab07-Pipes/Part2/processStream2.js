var fs = require('fs');
var makePig = require('./makePig');

// var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');
process.stdin
	.pipe(makePig)
	.pipe(process.stdout);
var fs = require('fs');
var makeTransformer = require('./makeTransformer');
// var makeBig = require('./makeBig');
// var makePig = require('./makePig');

// var whaleTransformer = makeTransformer('whale', 'unicorn');
var mobyTransformer = makeTransformer(new RegExp(/Moby\s*Dick/), (process.argv[2] || 'Moby Dick'));
var ishmaelTransformer = makeTransformer(new RegExp(/Ishmael/), (process.argv[3] || 'Ishmael'));
var ahabTransformer = makeTransformer(new RegExp(/Ahab/), (process.argv[2] || 'Ahab'));

var myReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream
	.pipe(mobyTransformer)
	.pipe(ishmaelTransformer)
	.pipe(ahabTransformer)
    .pipe(myWriteStream);
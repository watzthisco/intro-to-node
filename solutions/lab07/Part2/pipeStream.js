var fs = require('fs');
var makeBig = require('./makeBig');

var myReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream
    .pipe(makeBig)
    .pipe(myWriteStream);
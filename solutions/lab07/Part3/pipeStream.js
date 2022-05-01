const fs = require('fs');
const makeBig = require('./makeBig');
const makePig = require('./makePig');

let myReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream.pipe(makePig).pipe(myWriteStream);

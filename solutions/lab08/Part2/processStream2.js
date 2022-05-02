const fs = require('fs');
const makePig = require('./makePig');

// let myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');
process.stdin.pipe(makePig).pipe(process.stdout);

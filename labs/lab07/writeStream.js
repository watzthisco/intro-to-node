const fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream.on('data', (chunk) => {
  myWriteStream.write(chunk);
});

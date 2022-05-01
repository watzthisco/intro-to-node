const fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream.on('data', (chunk) => {
  //    console.log('chunk received');
  //    console.log(chunk);
  myWriteStream.write(chunk);
});

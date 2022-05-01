const fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');
myReadStream.on('data', (chunk) => {
  console.log('chunk received');
  console.log(chunk);
});

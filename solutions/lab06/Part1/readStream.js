var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');
myReadStream.on('data', chunk => {
    console.log('chunk received');
    console.log(chunk);
});
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream.on('data', chunk => {
    myWriteStream.write('chunk received');
//    console.log(chunk);
    myWriteStream.write(chunk);
});
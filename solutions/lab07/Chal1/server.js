const fs = require('fs');
const makeBig = require('./makeBig');
const makePig = require('./makePig');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  ////////////////////////////////////////////////////////////////////////////
  let myReadStream = fs
    .createReadStream(__dirname + '/MobyDick.txt', 'utf8')
    .on('end', function () {
      //readable streams have 'end'
      console.log('done reading');
    })
    .pipe(makePig)
    .pipe(makeBig)
    .pipe(res)
    .on('finish', function () {
      //writable streams have 'finish'
      console.log('finished!');
      process.exit(0);
    });
});

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}`);
});

////////////////////////////////////////////////
///The trick here is to define the read stream//
///from within the server definition.  In a   //
///future lab you will learn a better way to  //
///do this.                                   //
////////////////////////////////////////////////

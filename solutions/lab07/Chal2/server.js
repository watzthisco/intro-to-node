const fs = require('fs');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  ////////////////////////////////////////////////////////////////////////////
  let myReadStream = fs.createReadStream(
    __dirname + '/TheProject.html',
    'utf8'
  );
  myReadStream.pipe(res);
  ////////////////////////////////////////////////////////////////////////////
});

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}`);
});

////////////////////////////////////////////////
///If you ran into trouble with seeing a page //
///of HTML code, in res.setHeader() swap in   //
///text/html for text/plain.                  //
////////////////////////////////////////////////

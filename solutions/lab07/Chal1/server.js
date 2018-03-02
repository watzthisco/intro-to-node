var fs = require('fs');
var makeBig = require('./makeBig');
var makePig = require('./makePig');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	////////////////////////////////////////////////////////////////////////////
	var myReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8')
		.on('end',function(){
			console.log('done');
			process.exit(1);
		})
		.pipe(makePig)
        .pipe(makeBig)
        .pipe(res);




    ////////////////////////////////////////////////////////////////////////////
	//res.end('Hello World!\n');
});

server.listen(port, hostname, function() {
	console.log(`Server running at http://${hostname}:${port}`);
});

////////////////////////////////////////////////
///The trick here is to define the read stream//
///from within the server definition.  In a   //
///future lab you will learn a better way to  //
///do this.                                   //
////////////////////////////////////////////////
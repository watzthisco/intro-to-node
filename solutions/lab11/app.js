var http = require('http');
const https = require('https');
var urlToGet = process.argv[2];

const proto = !urlToGet.charAt(4).localeCompare('s') ? https : http;

proto
  .get(urlToGet, function (response) {
    response.on('data', function (chunk) {
      console.log('CHUNK: ' + chunk.toString());
    });
  })
  .on('error', function (e) {
    console.log('Got error: ' + e.message);
  });

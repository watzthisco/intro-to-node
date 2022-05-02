const http = require('http');
const https = require('https');

const urlToGet = process.argv[2];
const proto = !urlToGet.charAt(4).localeCompare('s') ? https : http;

let output;
proto
  .get(urlToGet, function (response) {
    response.on('data', function (chunk) {
      output += chunk.toString();
    });
    response.on('end', function () {
      console.log(output);
      console.log('output length: ' + output.length);
    });
  })
  .on('error', function (e) {
    console.log('Got error: ' + e.message);
  });

var http = require('http');
var urlToGet = process.argv[2];

var output;
http.get(urlToGet, function(response) {

    response.on("data", function(chunk) {
        output += chunk.toString();
    });
    response.on("end", function(){
        console.log(output);
        console.log("output length: " + output.length);
    });

}).on('error', function(e) {
    console.log("Got error: " + e.message);
});

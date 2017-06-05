var http = require('http');
var urlToGet = process.argv[2];


http.get(urlToGet,function(response){
    response.on("data", function(chunk) {
        console.log("CHUNK: " + chunk.toString());
    });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});


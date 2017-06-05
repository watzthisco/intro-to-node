var Promise = require('bluebird');
var fs = Promise.promisifyAll(require("fs"));

fs.readFileAsync("name", "utf8").then(function(data) {
    console.log(data.toString());
});
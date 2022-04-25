const fs = require('fs');

fs.readFile('text.txt', function(err, file){
    if (err){
        //handle error
    } else {
        console.log(file.toString());
    }
});
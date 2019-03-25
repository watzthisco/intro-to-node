const fs = require('fs');
let content = fs.readFile('file.md', 'utf-8', function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log("Done!");
});
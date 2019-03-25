const fs = require('fs');
let content = fs.readFile('file.md', 'utf-8', function(err,data){
  console.log(data);
});
console.log("Done!");
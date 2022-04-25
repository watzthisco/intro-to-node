const fs = require('fs');
let content = fs.readFileSync('file.md', 'utf-8');
console.log(content);
console.log("Done!");

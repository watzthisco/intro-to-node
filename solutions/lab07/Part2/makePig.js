const Transform = require('stream').Transform; 

const makePig = new Transform({ 
    transform(chunk, encoding, callback){
        chunk = chunk.toString().replace(/\b(\w)(\w+)\b/g, '$2$1ay'); 
        this.push(chunk);
        callback();
    } 
});

module.exports = makePig;
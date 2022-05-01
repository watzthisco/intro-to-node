const Transform = require('stream').Transform;

const makeBig = new Transform({
  transform(chunk, encoding, callback) {
    chunk = chunk.toString().toUpperCase();
    this.push(chunk);
    callback();
  },
});

module.exports = makeBig;

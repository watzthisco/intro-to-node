const Transform = require('stream').Transform;

let makeTransformer = (finder, replacer) => {
  const myTransform = new Transform({
    transform(chunk, encoding, callback) {
      chunk = chunk.toString().replace(new RegExp(finder, 'gi'), replacer);
      this.push(chunk);
      callback();
    },
  });
  return myTransform;
};

module.exports = makeTransformer;

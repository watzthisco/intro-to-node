const fs = require('fs');
const makeTransformer = require('./makeTransformer');

const mobyTransformer = makeTransformer(
  new RegExp(/Moby\s*Dick/),
  process.argv[2] || 'Moby Dick'
);
const ishmaelTransformer = makeTransformer(
  new RegExp(/Ishmael/),
  process.argv[3] || 'Ishmael'
);
const ahabTransformer = makeTransformer(
  new RegExp(/Ahab/),
  process.argv[2] || 'Ahab'
);

let myReadStream = fs.createReadStream(__dirname + '/MobyDick.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

myReadStream
  .pipe(mobyTransformer)
  .pipe(ishmaelTransformer)
  .pipe(ahabTransformer)
  .pipe(process.stdout);

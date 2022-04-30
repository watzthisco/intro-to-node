const sumModule = require('./sumModule');
const assert = require('assert');

// sumModule(-1, 2, (err, data) => {
// 	assert.equal(data, 1, err);
// });

// sumModule('one', 2, (err, data) => {
// 	assert.equal(data, 3, err);
// });

sumModule(1, 2, (err, data) => {
	assert.equal(data, 1, err);
});

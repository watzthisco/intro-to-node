var sumModule = require('./sumModule');
var assert = require('assert');

sumModule(-1, 2, (err, data) => {
	assert.equal(data, 1, err);
});

var Promise = require('promise');

makeTimeoutsPromises = (time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			if (Math.random() > 0.8) {
				reject('Fail!');
			} else {
				resolve(Math.floor(Math.random() * 5000));
			}
		}, time);
	});
};

makeTimeoutsPromises(1000)
.then(x=>{
	console.log(x);
	return makeTimeoutsPromises(x);})
.done(x=>{
	console.log(x);
	return makeTimeoutsPromises(x);})
.then(x=>{
	console.log(x);
	return makeTimeoutsPromises(x);})
.then(x=>{
	console.log(x);
	return makeTimeoutsPromises(x);})
.then(x=>console.log(x))
.catch(x=>console.error(x));

///////////////////////////////////////////////////////////////////////////////////////////////////
///
///.then(x=>{
///^
///
///TypeError: Cannot read property 'then' of undefined
///    at Object.<anonymous> (/home/thodges/Desktop/Lab08/Sltn/Chal2/makeTimeoutsPromises.js:22:1)
///    at Module._compile (module.js:571:32)
///    at Object.Module._extensions..js (module.js:580:10)
///    at Module.load (module.js:488:32)
///    at tryModuleLoad (module.js:447:12)
///    at Function.Module._load (module.js:439:3)
///    at Module.runMain (module.js:605:10)
///    at run (bootstrap_node.js:420:7)
///    at startup (bootstrap_node.js:139:9)
///    at bootstrap_node.js:535:3
///
/// There is no property 'then' of undefined because while both .done handle both fulfilled and
/// rejected Promises, only .then() returns a Promise.  This will often result in your process
/// crashing so it can be restarted in a clean state, and when running in a browser, you can get a
/// more detailed error log.
/// ///////////////////////////////////////////////////////////////////////////////////////////////
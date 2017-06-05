/* Event pattern 1: extend EventEmitter */

var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function() {
    console.log('Starting...');
});

r.on('start', function() {
    console.log("I've started!");
});

r.on('data', function(d) {
    console.log(`Got data: ${d}`);
});

r.on('end', function(t) {
    console.log(`Finished. Got ${t} events.`);
});
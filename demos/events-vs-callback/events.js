/* event pattern 2: return events from function */

var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
    var e = new EventEmitter();
    process.nextTick(function() {
        var count = 0;
        e.emit('start');
        var t = setInterval(function() {
            e.emit('data', ++count);
            if (count === c) {
                e.emit('end', count);
                clearInterval(t);
            }
        },10);
    });
    return(e);
};

var r = getResource(5);

r.on('start', function() {
    console.log("I've started!");
});

r.on('data', function(d) {
    console.log(`Got data: ${d}`);
});

r.on('end', function(t) {
    console.log(`Finished. Got ${t} events.`);
});

/* items are handled as they come in */
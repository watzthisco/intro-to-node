console.log('starting...');

process.nextTick(function(){
    for (var i=1; i<11; i++){
        console.log(i);
    }
});

console.log('Done!');
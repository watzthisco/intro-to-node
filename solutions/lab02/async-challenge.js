console.log('starting...');

function count(countTo,callback) {
    for (var i = 1; i < countTo; i++) {
        console.log(i);
    }
    callback();
}

count(10,function(){console.log('Done!')});
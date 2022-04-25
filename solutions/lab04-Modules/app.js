var sumModule = require('./sumModule.js');

sumModule(1,14,function(err,data){
    if(err) throw err;

    console.log(data);

});
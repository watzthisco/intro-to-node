var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8000)
});

server.route({
    path: '/',
    method:'GET',
    handler: function handler(request,reply){
                reply(`Hello hapi`);
             }
});

server.start(function() {
    console.log('Server running at:', server.info.uri);
});

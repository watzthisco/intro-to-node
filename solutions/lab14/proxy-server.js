var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 65535)
});

server.route({
    path: '/proxy',
    method:'GET',
    handler: function handler(request,reply){
                reply(`Hello proxy`);
             }
});

server.start(function() {
    console.log('Server running at:', server.info.uri);
});

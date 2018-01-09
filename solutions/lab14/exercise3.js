const Hapi = require('hapi');
const server = new Hapi.Server();
const Inert = require('inert');
const path = require('path');


server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8000)
});

server.register(Inert, function(err) {
    if (err) throw err;
});

server.route({
    path: '/',
    method:'GET',
    handler: {
        file: path.join(__dirname,"index.html")
    }
});

server.start(function() {
    console.log('Server running at:', server.info.uri);
});

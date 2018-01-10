const Hapi = require('hapi');
const server = new Hapi.Server();
const Inert = require('inert');
const Vision = require('vision');
const path = require('path');


server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8000)
});

server.register(Inert, function(err) {
    if (err) throw err;
});

server.register(Vision, function(err) {
    if (err) throw err;
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: path.join(__dirname, 'templates')
});

server.route({
    path: '/',
    method:'GET',
    handler: {
        view: 'index.html'
    }
});

server.start(function() {
    console.log('Server running at:', server.info.uri);
});

const Fs = require('fs');
const Hapi = require('hapi');
const Path = require('path');
const Rot13 = require('rot13-transform');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8000)
});

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: (request, reply) => {
            const thisfile = Fs.createReadStream(Path.join(__dirname, 'hapi-ness.txt'));
            reply(thisfile.pipe(Rot13()));
        }
    }
});

server.start(function() {
    console.log('Server running at:', server.info.uri);
});
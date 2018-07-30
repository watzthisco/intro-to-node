'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
});

async function serve() {
    try {
        await server.start();

        console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {
        console.log(err);
    }
}

serve();
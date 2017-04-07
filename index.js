(function () {
    'use strict';

    var http = require('http');
    var host = require('./src/server/config/host-config');
    var app = require('./src/server/config/express');

    http.createServer(app)
        .listen(host.port, host.address, () => {
            console.log(`Node server: http://${host.address}:${host.port}`);
        });
})(); 
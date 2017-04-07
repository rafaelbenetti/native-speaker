(function () {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');

    describe('Request to the root path', function () {
        it('Returns 200 status code', function (done) {
            request(app)
                .get('/')
                .expect(200)
                .end(function (err) {
                    if (err) throw err;
                    done();
                });
        });
    });
})();
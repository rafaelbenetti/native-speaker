(function () {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');
    const mongo = require('mongodb');
    const users = require('./data/users.js');

    describe('Creating new users', function () {

        it('Returns 201 status', function (done) {
            request(app)
                .post('/users')
                .send('name=arnold&age=17')
                .expect(201, done);
        });

        it('Returns complete user', function (done) {
            request(app)
                .post('/users')
                .send(`name=${users[0].name}&age=${users[0].age}`)
                .expect(/"name":"Jubileu"/, done);
        });
    });
})();
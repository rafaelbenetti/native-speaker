(function () {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');

    const users = [{
            "name": "Jubileu",
            "age": 18
        },
        {
            "name": "Marilene",
            "age": 45
        },
        {
            "name": "Oscar",
            "age": 18
        },
        {
            "name": "Jubileu",
            "age": 19
        }
    ];

    describe('Listing users on /users', function () {

        it('Returns 200 status code', function (done) {
            request(app)
                .get('/users')
                .expect(200, done);
        });

        it('Returns JSON format', function (done) {
            request(app)
                .get('/users')
                .expect('Content-type', /json/, done);
        });

        it('Returns initial users', function (done) {
            request(app)
                .get('/users')
                .expect(JSON.stringify(users), done);
        });       
    });

    describe('Creating new users', function() {

        it('Returns 201 status', function(done) {
            request(app)
                .post('/users')
                .send('name=arnold&age=17')
                .expect(201, done);
        });

        it('Returns complete user', function(done) {
            request(app)
                .post('/users')
                .send('name=arnold&age=17')
                .expect({"name":"arnold","age":17}, done);
        });
    })
})();
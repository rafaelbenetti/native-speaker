(function () {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');
    const mongo = require('mongodb');
    const users = require('./data/users.js');

    describe('Listing users on /users', function () {

        beforeEach((done) => {
            mongo.DB.dropDatabase((err) => {
                if (err) return done(err);
                mongo.DB.collection('user')
                    .insert(users, done);
            });
        });

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
                .expect(JSON.parse(JSON.stringify(users)), done);
        });
    });

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

    describe('Deleting users', function () {

        it('Delete user', function (done) {
            request(app)
                .delete(`/users/${users[0].name}`)
                .expect(204, done);
        });
    });

    describe('Get user details', function () {

        it('Returns HTML format', function (done) {
            request(app)
                .get('/users/Jubileu')
                .expect('Content-Type', /html/, done);
        });

        it('Returns user name', function (done) {
            request(app)
                .get(`/user/${users[0].name}`)
                .expect(/Jubileu/i, done);
        });
    });
})();
(function () {
    'use strict';

    const promise = require('promise');
    const mongo = require('mongodb');
    let userService = {};
 
    userService.find = function () {
        return new Promise((resolve, reject) => {
            mongo.DB.collection('user')
                .find()
                .toArray()
                .then((result) => resolve(result),
                    reject);
        });
    };

    userService.findOne = function (name) {
        return new Promise((resolve, reject) => {
            mongo.DB.collection('user')
                .findOne({
                    "name": name
                })
                .then((result) => resolve(result),
                    reject);
        });
    };

    userService.create = function (user) {
        return new Promise((resolve, reject) => {
            mongo.DB.collection('user')
                .insert(user)
                .then(() => resolve(user));
        });
    };

    userService.delete = function (name) {
        return new Promise((resolve, reject) => {
            userService.findOne(name)
                .then((user) => {
                    mongo.DB.collection('user')
                        .remove(user, 1)
                        .then(() => resolve());
                });
        })
    };

    module.exports = userService;
})();
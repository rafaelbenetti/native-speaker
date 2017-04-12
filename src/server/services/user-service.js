(function () {
    'use strict';

    const promise = require('promise');
    const mongo = require('mongodb');
    const COLLECTION = 'user';
    let userService = {};

    userService.find = function () {
        return new Promise((resolve, reject) => {
            mongo.DB.collection(COLLECTION)
                .find()
                .toArray()
                .then((result) => resolve(result),
                    reject);
        });
    };

    userService.findOne = function (name) {
        return new Promise((resolve, reject) => {
            mongo.DB.collection(COLLECTION)
                .findOne({
                    "name": name
                }, {
                    "_id": false
                })
                .then((result) => resolve(result),
                    reject);
        });
    };

    userService.create = function (user) {
        return new Promise((resolve, reject) => {
            mongo.DB.collection(COLLECTION)
                .insert(user)
                .then(() => resolve(user));
        });
    };

    userService.delete = function (name) {
        return new Promise((resolve, reject) => {
            userService.findOne(name)
                .then((user) => {
                    mongo.DB.collection(COLLECTION)
                        .remove(user, 1)
                        .then(() => resolve());
                });
        })
    };

    module.exports = userService;
})();
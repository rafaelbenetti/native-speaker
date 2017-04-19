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

    userService.findOne = function (user) {
        return new Promise((resolve, reject) => {
            mongo.DB.collection(COLLECTION)
                .findOne(user, {
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
                .then(() => reject(user));
        });
    };

    module.exports = userService;
})();
(function () {
    'use strict';

    const promise = require('promise');
    const mongo = require('mongodb');
    const COLLECTION = 'user';
    let userService = {};

    userService.find = function () {
        return mongo.DB.collection(COLLECTION)
            .find()
            .toArray();
    };

    userService.findBy = function (name) {
        return mongo.DB.collection(COLLECTION)
            .find({
                'name': {
                    $regex: name,
                    $options: 'i'
                }
            })
            .toArray();
    };

    userService.findOne = function (user) {
        return mongo.DB.collection(COLLECTION)
                .findOne(user, {
                    "_id": false
                });
    };

    userService.create = function (user) {
        return new Promise((resolve, reject) => {
            userService
                .findOne({
                    email: user.email
                })
                .then((found) => {
                    if (found)
                        reject('This E-mail is already used in our system.');
                    else {
                        mongo.DB.collection(COLLECTION)
                            .insert(user)
                            .then(() => resolve(user),
                                reject);
                    }
                });
        });
    };

    module.exports = userService;
})();
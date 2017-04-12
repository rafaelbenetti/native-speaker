(function () {
    'use strict';

    let userService = {};

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

    const promise = require('promise');
    const mongo = require('mongodb');

    userService.find = function (name) {

        return new Promise((resolve, reject) => {

            mongo.DB.collection('user')                        
                .find()
                .toArray()
                .then((result) => {
                    resolve(result);
                }, reject);
        });
    };

    userService.create = function (user) {
        users.push(user);
        return user;
    };

    userService.delete = function (name) {
        let user = userService.find(name);
        let index = users.indexOf(user);
        users.splice(index, 1);
    };

    module.exports = userService;
})();
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

    const mongoConnection = require('../infra/mongo/connection.js');

    userService.find = function (name) {
        mongoConnection.connect();
        // db.collection('user').insert(users[0]);

        // db.collection('user', function (err, collection) {
        //     collection.find().toArray(function (err, usersFound) {
        //         itens = usersFound;
        //         console.log(itens);
        //     });
        // });

        return ["itens"];
    };

    userService.create = function (user) {
        users.push(user);
        return user;
    };

    userService.delete = function (name) {
        let user = userService.find(name);
        let index = users.indexOf(user);
        users.splice(index, 1);
    }

    module.exports = userService;
})();
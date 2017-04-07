(function() {
    'use strict';

    let userService = {};

    const users = 
    [{
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
    }];

    userService.find = function(name) {
        return users;
    };

    module.exports = userService;
})();
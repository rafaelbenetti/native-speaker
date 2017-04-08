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
        if(name)
            return users.find(u => u.name == name);
        return users;
    };

    userService.create = function(user) {
        users.push(user);
        return user;
    };

    userService.delete = function(name) {
        let user = userService.find(name);
        let index = users.indexOf(user);
        users.splice(index, 1);
    }

    module.exports = userService;
})();
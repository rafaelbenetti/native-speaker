(function() {
    'use strict';

    const userService = require('../services/user-service');

    let userController = {};

    userController.find = function(name) {
        return userService.find(name);
    };

    module.exports = userController;
})();
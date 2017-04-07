(function() {
    'use strict';

    const userService = require('../services/user-service');

    let userController = {};

    userController.find = name => userService.find(name);
    userController.create = user => userService.create(user);

    module.exports = userController;
})();
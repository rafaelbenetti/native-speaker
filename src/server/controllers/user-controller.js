(function() {
    'use strict';

    const userService = require('../services/user-service');

    let userController = {};

    userController.find = function(name) { return userService.find(name) };
    userController.create = user => userService.create(user);
    userController.delete = name => userService.delete(name);

    module.exports = userController;
})(); 
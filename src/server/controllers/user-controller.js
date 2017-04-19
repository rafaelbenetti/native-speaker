(function () {
    'use strict';

    const userService = require('../services/user-service');

    let userController = {};

    userController.find = () => userService.find();
    userController.create = user => userService.create(user);

    module.exports = userController;
})();

(function () {
    'use strict';

    const userService = require('../services/user-service');

    let userController = {};

    userController.find = () => userService.find();
    userController.findOne = name => userService.findOne(name);
    userController.create = user => userService.create(user);
    userController.delete = name => userService.delete(name);

    module.exports = userController;
})();

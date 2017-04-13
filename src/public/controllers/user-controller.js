(function () {
    'use string';

    const app = angular.module('nativeSpeaker');

    let userController = function (userService) {

        var self = this;
        self.users = [];
        
        userService.find()
            .then(function (users) {
                self.users = users;
            });
    };

    app.controller('UserController', ['userService', userController]);
})();
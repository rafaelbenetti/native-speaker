(function () {
    'use string';

    const app = angular.module('nativeSpeaker');

    var userController = function (userService) {

        var self = this;
        this.users = [];
        
        userService.find()
            .then(function (result) {
                self.users = result;
            });    
    };

    app.controller('UserController', ['userService', userController]);
})();
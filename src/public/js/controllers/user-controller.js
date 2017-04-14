(function () {
    'use string';

    angular
        .module('nativeSpeaker')
        .controller('UserController', ['userService', UserController]);

    function UserController(userService) {

        var self = this;
        self.users = [];

        userService.find()
            .then(function (users) {
                self.users = users;
            });
    };

})();
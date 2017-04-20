(function () {
    'use string';

    angular
        .module('nativeSpeaker')
        .controller('UserController', ['userService', UserController]);

    function UserController(userService) {
        let controller = this;
        controller.users = [];

        controller.find = () => {
            userService.find()
                .then(function (users) {
                    controller.users = users;
                });
        }

        controller.find();
    };
})();
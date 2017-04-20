(function () {
    'use strict';

    angular
        .module('nativeSpeaker')
        .controller('HomeController', ['userService', homeController]);

    function homeController(userService) {
        
        let controller = this;
        let users = [];
        
        controller.findUsers = () => {
            userService.find()
                .then((users) => {
                    controller.users = users;
                });
        };

        controller.findUsers();
    };
})();
(function () {
    'use strict';

    angular
        .module('nativeSpeaker')
        .config(function (gravatarProviderProvider) {
            gravatarProviderProvider.setSize(80);
        })
        .controller('HomeController', ['userService', 'gravatarProvider', homeController]);

    function homeController(userService, gravatarProvider) {

        let controller = this;
        let users = [];

        controller.findUsers = () => {
            userService.find()
                .then((users) => {
                    controller.users = users;
                });
        };

        controller.findUsersBy = (name) => {
            userService.findBy(name)
                .then((users) => {
                    controller.users = users;
                })
        };

        controller.getGravatarUrl = function (email) {
            return gravatarProvider(email);
        };

        controller.findUsers();
    };
})();
(function () {
    'use strict';

    angular
        .module('nativeSpeakerAccount')
        .controller('AccountController', ['$location', 'accountService', AccountController]);

    function AccountController($location, accountService) {
        let controller = this;
        controller.account = {};

        controller.create = function (account) {
            accountService.create(account)
                .then(function (result) {
                    $location.path('/');
                });
        };

        controller.login = function (account) {
            accountService.login(account)
                .then(function (result) {
                    $location.path('/');
                });
        };
    };
})();
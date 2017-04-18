(function () {
    'use strict';

    angular
        .module('nativeSpeakerAccount')
        .controller('AccountController', ['accountService', AccountController]);

    const HOME_URL = 'http://localhost:3000/';

    function AccountController(accountService) {
        let controller = this;
        controller.account = {};

        controller.create = function (account) {
            accountService.create(account)
                .then(function (result) {
                    window.location.href = HOME_URL;
                });
        };

        controller.login = function (account) {
            accountService.login(account)
                .then(function (result) {
                    window.location.href = HOME_URL;
                });
        };


    };
})();
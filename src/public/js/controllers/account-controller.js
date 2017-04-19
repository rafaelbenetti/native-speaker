(function () {
    'use strict';

    angular
        .module('nativeSpeakerAccount')
        .controller('AccountController', ['$location', 'accountService', AccountController]);

    const HOME_URL = 'http://localhost:3000/';

    function AccountController($location, accountService) {
        let controller = this;
        controller.account = {};

        controller.create = function (account) {
            accountService.create(account)
                .then((result) => $location.path('/'),
                    (result) => {
                        controller.errorMessage = result.data;
                    });
        };

        controller.login = function (account) {
            accountService.login(account)
                .then(() => window.location.href = HOME_URL,
                    () => {
                        controller.account = {};
                        controller.loginForm.$setPristine();
                        controller.errorOnLogin = true;
                    });
        };


    };
})();
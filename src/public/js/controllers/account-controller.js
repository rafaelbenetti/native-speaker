(function () {
    'use strict';

    angular
        .module('nativeSpeakerAccount')
        .controller('AccountController', ['$location', 'accountService', AccountController]);

    const HOME_URL = location.origin;

    function AccountController($location, accountService) {
        let controller = this;
        controller.account = {
            languages: []
        };

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

        controller.addLanguage = () => controller.account.languages.push({});
        controller.removeLanguage = (index) => {
            controller.account.languages.splice(index, 1);
        };
    };
})();
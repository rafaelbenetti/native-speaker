(function () {
    'use strict';

    angular
        .module('nativeSpeakerAccount')
        .controller('AccountController', ['$location', 'accountService', AccountController]);

    function AccountController($location, accountService) {
        var controller = this;
        controller.account = {};

        controller.create = function (account) {            
            accountService.create(account)
                .then(function (result) {
                    $location.path('/');
                });
        };
    };
})();
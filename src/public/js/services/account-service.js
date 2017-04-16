(function () {
    'use strict';

    angular
        .module('nativeSpeakerAccount')
        .service('accountService', ['$http', 'apiFactory', accountService]);

    function accountService($http, apiFactory) {
        let service = this;

        service.create = function (account) {
            return $http({
                    method: 'POST',
                    url: apiFactory.getUsersUrl(),
                    data: account
                })
                .then(result => result.data);
        };

        service.login = function(account) {
            return $http({
                method: 'POST',
                url: apiFactory.getAccountUrl(),
                data: account
            })
            .then(result => result.data);
        };
    };
})();
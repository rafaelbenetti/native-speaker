(function () {
    'use strict';

    angular
        .module('nativeSpeaker')
        .service('userService', ['$http', 'apiFactory', userService]);

    function userService($http, apiFactory) {
        let service = this;

        service.find = function () {
            return $http.get(apiFactory.getUsersUrl())
                .then(users => users.data);
        };

        service.create = function (user) {
            return $http.post(apiFactory.getUsersUrl())
                .then(result => result.data);
        };
    };
})();
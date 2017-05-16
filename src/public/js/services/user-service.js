(function () {
    'use strict';

    angular
        .module('nativeSpeaker')
        .service('userService', ['$http', 'apiFactory', userService]);

    function userService($http, apiFactory) {
        let service = this;

        service.find = function () {
            return $http({
                    method: 'GET',
                    url: apiFactory.getUsersUrl()
                })
                .then(users => users.data);
        };

        service.findBy = function (name) {
            return $http({
                method: 'GET',
                url: `${apiFactory.getUsersUrl()}/${name}`
            })
            .then(users => users.data);
        };
    };
})();
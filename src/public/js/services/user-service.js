(function () {
    'use strict';

    angular
        .module('nativeSpeaker')
        .service('userService', ['$http', 'apiFactory', userService]);

    function userService($http, apiFactory) {

        this.find = function () {
            return $http.get(apiFactory.getUsersUrl())
                .then(users => users.data);
        };
    };
})();
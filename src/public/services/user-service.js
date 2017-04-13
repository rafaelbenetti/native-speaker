(function () {
    'use strict';

    const app = angular.module('nativeSpeaker');

    let userService = function ($http) {
        this.find = function () {
            return new Promise((resolve, reject) => {
                $http.get('http://localhost:3000/users')
                    .then(users => resolve(users.data));
            });
        };
    };

    app.service('userService', ['$http', userService]);
})();
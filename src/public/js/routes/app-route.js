(function () {
    'use strict';

    angular
        .module('nativeSpeaker', ['ngRoute'])
        .config(['$routeProvider', router]);

    function router($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/user/users.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    };
})();
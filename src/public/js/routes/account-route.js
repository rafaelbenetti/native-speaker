(function () {
    'use strict';

    angular
        .module('nativeSpeakerAccount', ['ngRoute'])
        .config(['$routeProvider', router]);

    function router($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'templates/user/login.html'
            })
            .when('/signup', {
                templateUrl: 'templates/user/signup.html'
            })
            .otherwise({
                redirectTo: 'login'
            });
    };
})();
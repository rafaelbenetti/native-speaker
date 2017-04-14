(function () {
    'use strict';

    angular
        .module('nativeSpeakerAccount', ['ngRoute'])
        .config(function ($routeProvider) { 
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
        });
})();
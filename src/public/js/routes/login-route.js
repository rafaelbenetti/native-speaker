(function () {
    'use strict';

    angular
        .module('nativeSpeakerLogin', ['ngRoute'])
        .config(function ($routeProvider) { 
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/login.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
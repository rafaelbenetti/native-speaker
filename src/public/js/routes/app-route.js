(function () {
    'use strict';

    angular
        .module('nativeSpeaker', ['ngRoute'])
        .config(['$routeProvider', router]);

    function router($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home/index.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    };
})();
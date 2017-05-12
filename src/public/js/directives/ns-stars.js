(function() {
    'use strict';

    angular.module('nativeSpeaker')
        .directive('nsStars', nsStars);

    function nsStars() {
        return {
            restrict: 'E',
            templateUrl: '../templates/directives/ns-stars.html',
            scope: {
                stars: '='
            }
        };
    };
})();
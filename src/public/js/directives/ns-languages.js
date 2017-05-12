(function(){
    'use strict';

    angular.module('nativeSpeaker')
        .directive('nsLanguages', nsLanguages);

    function nsLanguages() {
        return {
            restrict: 'E',
            templateUrl: '../templates/directives/ns-languages.html',
            scope: {
                languages: '=',
                limit: '@'
            }
        };
    };
})();
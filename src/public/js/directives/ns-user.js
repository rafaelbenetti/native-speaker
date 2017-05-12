(function() {
    'user strict';

    angular.module('nativeSpeaker')
        .directive('nsUser', nsUser);

    function nsUser() {
        return {
            restrict: 'E',
            templateUrl: '../templates/directives/ns-user.html'
        };
    };
})();
(function () {
    'use strict';

    angular
        .module('nativeSpeaker')
        .factory('apiFactory', apiFactory);

    function apiFactory() {

        const urlBase = location.origin;

        var getUsersUrl = function () {
            return `${urlBase}/users`;
        };

        return {
            getUsersUrl: getUsersUrl
        };
    };
})();
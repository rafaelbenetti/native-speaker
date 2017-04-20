(function () {
    'use strict';

    angular 
        .module('nativeSpeakerAccount')
        .factory('apiFactory', apiFactory);

    function apiFactory() { 

        const urlBase = location.origin;

        var getUsersUrl = function () {
            return `${urlBase}/users`;
        };

        var getAccountUrl = function () {
            return `${urlBase}/account`;
        };

        return {
            getUsersUrl: getUsersUrl,
            getAccountUrl: getAccountUrl
        };
    };
})();
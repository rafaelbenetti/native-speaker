(function () {
    'use strict';

    angular 
        .module('nativeSpeakerAccount')
        .factory('apiFactory', apiFactory);

    function apiFactory() {

        const urlBase = 'http://localhost:3000';

        var getUsersUrl = function () {
            return `${urlBase}/users`;
        };

        return {
            getUsersUrl: getUsersUrl
        };
    };
})();
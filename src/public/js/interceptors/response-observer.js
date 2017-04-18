(function () {
    'use strict';

    angular
        .module('nativeSpeaker')
        .factory('responseObserver', function responseObserver($q, $window) {
            return {
                'responseError': function (errorResponse) {
                    if (errorResponse.status === 403) {
                        $window.location.href = 'http://localhost:3000/account';
                    }
                    return $q.reject(errorResponse);
                }
            }
        })
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('responseObserver');
        });
})();
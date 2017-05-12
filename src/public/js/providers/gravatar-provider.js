(function () {
    'use strict';

    angular.module('nativeSpeaker')
        .provider('gravatarProvider', gravatarProvider);       

    const GRAVATAR_URL = "http://www.gravatar.com/avatar/";

    function gravatarProvider() {
        let provider = {};
        provider.size = 44;
        
        this.setSize = function (size) {
            provider.size = size;
        }

        this.$get = function () {
            provider.getUrl = function (email) {
                return `${GRAVATAR_URL}${CryptoJS.MD5(email)}?size=${provider.size}`;
            };
            return provider.getUrl;
        }
    };
})();
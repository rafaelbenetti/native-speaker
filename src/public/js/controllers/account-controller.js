(function () {
    'use strict';

    angular
        .module('nativeSpeakerAccount')
        .controller('AccountController', ['$location', 'accountService', AccountController]);

    const HOME_URL = location.origin;
    const countries = [{
            name: 'English US',
            code: 'US'
        },
        {
            name: 'English UK',
            code: 'GB'
        },
        {
            name: 'Spanish',
            code: 'ES'
        },
        {
            name: 'French',
            code: 'FR'
        },
        {
            name: 'German',
            code: 'DE'
        },
        {
            name: 'Irish',
            code: 'IR'
        },
        {
            name: 'Italian',
            code: 'IT'
        },
        {
            name: 'Japonese',
            code: 'JP'
        },
        {
            name: 'Korean',
            code: 'KS'
        },
        {
            name: 'Portuguese',
            code: 'BR'
        }
    ];

    function AccountController($location, accountService) {
        let controller = this;
        controller.countries = countries;
        controller.account = {
            languages: []
        };

        controller.create = function (account) {
            console.log(account);
            accountService.create(account)
                .then((result) => $location.path('/'),
                    (result) => {
                        controller.errorMessage = result.data;
                    });
        };

        controller.login = function (account) {
            accountService.login(account)
                .then(() => window.location.href = HOME_URL,
                    () => {
                        controller.account = {};
                        controller.loginForm.$setPristine();
                        controller.errorOnLogin = true;
                    });
        };

        controller.addLanguage = () => {
            controller.account.languages.push({});
            controller.updateCountries();
        };        
        controller.removeLanguage = (index) => {
            controller.account.languages.splice(index, 1);
            controller.updateCountries();
        };
        controller.updateCountries = () => {
            controller.countries.map((c) =>
                c.used = controller.account.languages.filter((l) => l.name === c.code)[0]);
        };

        controller.selectLanguage = (code) => {
            let country = countries.filter((c) => c.code === code)[0];
            let index = countries.indexOf(country);

            country.used = true;
            controller.countries[index] = country;
            controller.updateCountries();
        };
    };
})();
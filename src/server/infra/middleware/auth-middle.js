(function () {
    'use strict';

    let middleware = {};

    middleware.authenticate = function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/account');
    };

    module.exports = middleware;
})();
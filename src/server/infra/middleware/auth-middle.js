(function () {
    'use strict';

    let middleware = {};

    middleware.authenticate = function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.sendStatus(403);
    };

    module.exports = middleware;
})();
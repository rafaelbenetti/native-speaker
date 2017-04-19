(function () {
    'use strict';

    const express = require('express');
    const passport = require('passport');
    const test = require('../infra/auth/local-auth');
    let router = express.Router();

    router.route('/')
        .get((req, res) => {
            res.render('account.html');
        })
        .post(function (req, res, next) {
            passport.authenticate('local', function (err, user, info) {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    return res.sendStatus(403);
                }
                req.logIn(user, function (err) {
                    if (err) {
                        return next(err);
                    }
                    return res.redirect('/');
                });
            })(req, res, next);
        });

    module.exports = router;
})();
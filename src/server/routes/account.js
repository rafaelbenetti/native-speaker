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
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/account'
        }));

    module.exports = router;
})();
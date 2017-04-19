(function () {
    'use strict';

    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const userService = require('../../services/user-service');

    function findUser(email, cb) {
        userService.findOne({
            email: email
        }).then(function (user) {           
            if (user) {                
                return cb(null, user)
            }
            return cb(null)
        });
    };

    passport.serializeUser(function (user, cb) {
        cb(null, user.email)
    });

    passport.deserializeUser(function (user, cb) {
        findUser(user.email, cb)
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function (email, password, done) {
            findUser(email, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false);
                }
                if (password !== user.password) {
                    return done(null, false);
                }
                return done(null, user);
            });
        }
    ));
})();
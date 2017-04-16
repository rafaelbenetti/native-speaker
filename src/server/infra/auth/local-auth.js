(function () {
    'use strict';

    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;

    const user = {
        username: 'nativespeaker@gmail.com',
        password: 'nativespeaker',
        id: 1
    };

    // TODO: Get user on database..
    // Remove the callback function..
    function findUser(username, callback) {
        if (username === user.username) {
            return callback(null, user)
        }
        return callback(null)
    };

    passport.serializeUser(function (user, cb) {
        cb(null, user.username)
    });

    passport.deserializeUser(function (username, cb) {
        findUser(username, cb)
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function (username, password, done) {
            findUser(username, function (err, user) {
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
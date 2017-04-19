(function () {
    'use strict';

    const express = require('express');
    const passport = require('passport');
    const userController = require('../controllers/user-controller');
    const auth = require('../infra/middleware/auth-middle');

    let router = express.Router();

    router.route('/').post((req, res) => {
        userController
            .create(req.body)
            .then((user) => res.status(201).json(user),
                () => res.status(400).json('Sorry! We had a problem to create your account.'));
    });

    router.use(auth.authenticate);

    router.route('/')
        .get((req, res) => {
            userController
                .find()
                .then((users) => res.json(users));
        });

    module.exports = router;
})();
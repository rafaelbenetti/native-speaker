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
                () => res.status(400).json('Ocorreu um erro ao salvar o usuário'));
    });

    router.use(auth.authenticate);

    router.route('/')
        .get((req, res) => {
            userController
                .find()
                .then((users) => res.json(users));
        });

    router.route('/:name')
        .get((req, res) => {
            userController
                .findOne(req.params.name)
                .then((user) => res.render('user-detail.ejs', {
                        user: user
                    }),
                    () => res.json('User not found!'));
        })
        .delete((req, res) => {
            userController
                .delete(req.params.name)
                .then(() => res.sendStatus(204));
        });

    module.exports = router;
})();
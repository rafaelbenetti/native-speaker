(function () {
    'use strict';

    const express = require('express');
    const userController = require('../controllers/user-controller');

    let router = express.Router();
    router.route('/')
        .get((req, res) => {
            let users = userController.find();
            res.json(users);
        })
        .post((req, res) => {
            let user = userController.create(req.body);
            if (user)
                res.status(201).json(user);
            else
                res.status(400).json('Ocorreu um erro ao salvar o usuário');
        });

    router.route('/:name')
        .get((req, res) => {
            let user = userController.find(req.params.name);
            res.render('user-detail.ejs', { user: user });
        })
        .delete((req, res) => {
            userController.delete(req.params.name);
            res.sendStatus(204);
        });

    module.exports = router;
})();
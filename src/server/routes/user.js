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
            res.status(201).json('Usuário cadastrado com sucesso.');
        });

    module.exports = router;
})();
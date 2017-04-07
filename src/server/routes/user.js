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
            if(user)
                res.status(201).json(user);
            else
                res.status(400).json('Ocorreu um erro ao salvar o usuário');
        });

    module.exports = router;
})();
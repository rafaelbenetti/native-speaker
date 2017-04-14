(function () {
    'use strict';

    const express = require('express');

    let router = express.Router();
    router.route('/')
        .get((req, res) => {
            res.render('login.html');
        });

    module.exports = router;
})();
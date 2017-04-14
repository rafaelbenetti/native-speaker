(function () {
    'use strict';

    const express = require('express');

    let router = express.Router();
    router.route('/')
        .get((req, res) => {
            res.render('user-create.ejs');
        });

    module.exports = router;
})();
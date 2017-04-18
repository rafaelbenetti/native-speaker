(function () {
    'use strict';

    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const passport = require('passport');
    const session = require('express-session');
    const RedisStore = require('connect-redis')(session);
    
    const publicFolder = '../../public';
    const publicFolderScripts = '../../../bower_components';
    const userRoutes = require('../routes/user');
    const accountRoutes = require('../routes/account');
    const mongoConnection = require('../infra/mongo/connection');
    mongoConnection.connect();

    let app = express();

    // TODO: Create a secret key on node environment...
    // Starts de session after login...    
    app.use(session({
        store: new RedisStore({ 
            url: '//cache:6379'
        }),
        secret: 'keyboard cat', 
        resave: false,
        saveUninitialized: false 
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    // Cria uma aplicação stática com todo o conteúdo da pasta.
    app.use(express.static(path.join(__dirname, publicFolder)));
    app.use(express.static(path.join(__dirname, publicFolderScripts)));

    // Configura o caminho para as view do template ejs.
    app.set('views', path.join(__dirname, '../../public'));
    app.engine('html', require('ejs').renderFile);

    // Convert o retorno para json, basicamente.
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    // Converte as requisições para json, chegando no req.body..???
    app.use(bodyParser.json());

    app.use('/users', userRoutes);
    app.use('/account', accountRoutes);

    module.exports = app;
})();
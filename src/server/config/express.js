(function() {
    'use strict';

    const express = require('express');    
    const bodyParser = require('body-parser');
    const path = require('path');
    
    const publicFolder = '../../public';
    const publicFolderScripts = '../../../node_modules';    
    const userRoutes = require('../routes/user');
    const loginRoutes = require('../routes/login');    

    const mongoConnection = require('../infra/mongo/connection.js');
    mongoConnection.connect();

    let app = express();

    // Cria uma aplicação stática com todo o conteúdo da pasta.
    app.use(express.static(path.join(__dirname, publicFolder)));
    app.use(express.static(path.join(__dirname, publicFolderScripts)));

    // Configura o caminho para as view do template ejs.
    app.set('views', path.join(__dirname, '../views'));

    // Convert o retorno para json, basicamente.
    app.use(bodyParser.urlencoded({extended: false}));

    // Converte as requisições para json, chegando no req.body..???
    app.use(bodyParser.json());

    app.use('/users', userRoutes);    
    app.use('/login', loginRoutes);
    
    module.exports = app;
})();
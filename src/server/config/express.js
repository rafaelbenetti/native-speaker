(function() {
    'use strict';

    const express = require('express');    
    const bodyParser = require('body-parser');
    const path = require('path');
    
    const userRoutes = require('../routes/user');
    const publicFolder = '../../public';

    let app = express();

    // Cria uma aplicação stática com todo o conteúdo da pasta.
    app.use(express.static(path.join(__dirname, publicFolder)));

    // Converte as requisições para json, chegando no req.body..???
    app.use(bodyParser.json());

    app.use('/user', userRoutes);    
    
    module.exports = app;   
})(); 
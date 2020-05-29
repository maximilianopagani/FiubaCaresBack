'use strict';
const express = require('express');
const UserController = require('./../controllers/user');

let api = express.Router();
const md_auth = require('../middlewares/authenticated');

/*const corsOptions = {
    origin: 'http://fiubacares.herokuapp.com/',
    optionsSuccessStatus: 200
};*/

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/user/:username/:password', md_auth.ensureAuth, UserController.getUser);
api.get('/users', md_auth.ensureAuth, UserController.getAll);
api.get('/', (req, res) => {
    res.send('acp1-2020 api');
});

module.exports = api;
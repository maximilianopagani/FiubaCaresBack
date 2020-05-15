'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const user_routes = require('./routes/user_rest');
//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Cargamos las rutas
app.use('/api', user_routes);

// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;
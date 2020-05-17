'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/user_rest');

//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cargamos las rutas
app.use('/api', userRoutes);

module.exports = app;
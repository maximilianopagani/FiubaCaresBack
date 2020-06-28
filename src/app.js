'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user_rest');
const eventRoutes = require('./routes/event_rest');
const inscriptionRoutes = require('./routes/inscription_rest');
const articleRoutes = require('./routes/article_rest');
const newsletterRoutes = require('./routes/newsletter_rest');
require('dotenv').config();

app.use(cors());

//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Acess-Control-Allow-Methods', 'PUT POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Cargamos las rutas
app.use('/api', userRoutes);
app.use('/api', eventRoutes);
app.use('/api', inscriptionRoutes);
app.use('/api', articleRoutes);
app.use('/api', newsletterRoutes);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;
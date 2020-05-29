'use strict';
const express = require('express');
const cors = require('cors');
const EventController = require('./../controllers/event');

let api = express.Router();
const md_auth = require('../middlewares/authenticated');

const corsOptions = {
    origin: 'http://fiubacares.herokuapp.com/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/events/:event_id', cors(corsOptions), md_auth.ensureAuth, EventController.getEvent);
api.get('/events', cors(corsOptions), md_auth.ensureAuth, EventController.getAll);
api.put('/events/:event_id', cors(corsOptions), md_auth.ensureAuth, EventController.update);
api.post('/events/', cors(corsOptions), md_auth.ensureAuth, EventController.save);
api.delete('/events/:event_id', cors(corsOptions), md_auth.ensureAuth, EventController.remove);

module.exports = api;
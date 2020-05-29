'use strict';
const express = require('express');
let api = express.Router();

const EventController = require('./../controllers/event');
const md_auth = require('../middlewares/authenticated');

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/events/:event_id', md_auth.ensureAuth, EventController.getEvent);
api.get('/events', md_auth.ensureAuth, EventController.getAll);
api.put('/events/:event_id', md_auth.ensureAuth, EventController.update);
api.post('/events/', md_auth.ensureAuth, EventController.save);
api.delete('/events/:event_id', md_auth.ensureAuth, EventController.remove);

module.exports = api;
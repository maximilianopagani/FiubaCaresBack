'use strict';

const express = require('express');
const InscriptionController = require('./../controllers/inscription');

let api = express.Router();
const md_auth = require('../middlewares/authenticated');

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.post('/inscriptions', md_auth.ensureAuth, InscriptionController.save);
api.get('/inscriptions', md_auth.ensureAuth, InscriptionController.getAll);
api.delete('/inscriptions/:inscription_id', md_auth.ensureAuth, InscriptionController.remove);

module.exports = api;
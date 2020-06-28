'use strict';

const express = require('express');
const NewsletterController = require('./../controllers/newsletter');

let api = express.Router();
const md_auth = require('../middlewares/authenticated');

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.post('/newsletter', md_auth.ensureAuth, NewsletterController.save);
api.get('/newsletter', md_auth.ensureAuth, NewsletterController.getAll);
api.delete('/newsletter/:newsletter_id', md_auth.ensureAuth, NewsletterController.remove);

module.exports = api;
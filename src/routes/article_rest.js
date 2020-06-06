'use strict';
const express = require('express');
let api = express.Router();

const ArticleController = require('./../controllers/article');
const md_auth = require('../middlewares/authenticated');

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/articles/:article_id', md_auth.ensureAuth, ArticleController.getArticle);
api.get('/articles', md_auth.ensureAuth, ArticleController.getAll);
api.put('/articles/:article_id', md_auth.ensureAuth, ArticleController.update);
api.post('/articles/', md_auth.ensureAuth, ArticleController.save);
api.delete('/articles/:article_id', md_auth.ensureAuth, ArticleController.remove);

module.exports = api;
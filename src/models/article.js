'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = Schema({
    title: String,
    description: String,
    source: String,
    img_src: String,
    preview: String,
    created: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Articles', ArticleSchema, 'articles');
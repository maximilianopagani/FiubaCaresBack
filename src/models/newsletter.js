'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsletterSchema = Schema({
    title: String,
    description: String,
    img_src: String,
    creation_datetime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Newsletter', NewsletterSchema, 'newsletter');
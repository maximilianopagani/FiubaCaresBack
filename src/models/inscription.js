'use strict';
const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid';

const EventSchema = Schema({
    event_id: {
        type: String,
        required: true
    },
    dni: String,
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    inscription_datetime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Inscriptions', EventSchema, 'inscriptions');
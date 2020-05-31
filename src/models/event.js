'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = Schema({
    title: String,
    description: String,
    author: String,
    img_src: String,
    meeting_datetime: {
        type: Date,
        default: Date.now
    },
    meeting_place: String,
    quota: {
        type: Number,
        min: 1,
        max: 1000
    }
});

module.exports = mongoose.model('Events', EventSchema, 'events');
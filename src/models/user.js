'use strict';
const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    type: String,
    password: String,
});

module.exports = mongoose.model('User', UserSchema);
'use strict';
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

require('dotenv').config();
const uri = `mongodb+srv://administrator:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/FiubaCMS?retryWrites=true&w=majority`;
const options = {
    keepAlive: 300000,
    connectTimeoutMS: 30000,
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(uri, options).catch((err)=>{console.log(err); process.exit(1)});

const UserSchema = new Schema({
    name: String,
    type: String,
    password: String,
});

module.exports = mongoose.model('Users', UserSchema, 'users');
'use strict';

const app = require('./app');
const portToUse = process.env.PORT || '3000';
const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://administrator:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/FiubaCMS?retryWrites=true&w=majority`;
const options = {
    keepAlive: 300000,
    connectTimeoutMS: 30000,
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(uri, options).catch((err)=>{console.log(err); process.exit(1)});

app.listen(portToUse, () => {
    console.log("Servidor corriendo");
});
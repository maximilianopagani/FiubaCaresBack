'use strict';

const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || '3000';

mongoose.Promise = global.Promise;
const uri = `mongodb+srv://administrator:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/test?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true })
.then(() => {
    // Cuando se realiza la conexión, lanzamos este mensaje por consola
    console.log("La conexión a la base de datos se ha realizado correctamente")
    app.listen(port, () => {
        console.log("servidor corriendo en http://localhost:3800");
    });
})
.catch(
    err => console.log(err)
);
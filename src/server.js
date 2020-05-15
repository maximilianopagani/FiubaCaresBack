'use strict';

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const DB = require('./database/connection');
const app = require('./app');

const userRouter = require('./routes/user_rest');
require('dotenv').config();


mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log("La conexión a la base de datos curso_mean_social se ha realizado correctamente")

        // CREAR EL SERVIDOR WEB CON NODEJS
        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:3800");
        });
    })
    // Si no se conecta correctamente escupimos el error
    .catch(err => console.log(err));

/*const app = express();
const port = process.env.PORT;
const dbName = "FiubaCMS";
const collectionName = "users";
const dbConnection = new DB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse JSON (application/json content-type)
app.use(bodyParser.json());

app.use('/api', userRouter);

const bla = dbConnection.getConnection(dbName, collectionName, (error, connection) => {
    if (error) {
        throw (error);
    }
    return connection;
});
const lalala = bla.then( result => console.log('LLLL' + result));

app.listen( port, () => {
    console.log(`Server running at http://localhost:${port}`);
});*/
'use strict';

const app = require('./app');

const portToUse = process.env.PORT || '3000';

app.listen(portToUse, () => {
    console.log("Servidor corriendo");
});
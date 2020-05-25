'use strict';

const app = require('./app');
const port = process.env.PORT;
const dbName = "FiubaCMS";

const portToUse = process.env.PORT || '3000';

app.listen(portToUse, () => {
    console.log("Servidor corriendo");
});
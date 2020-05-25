'use strict';

const app = require('./app');
const port = process.env.PORT;
const dbName = "FiubaCMS";

const port = process.env.PORT || '3000';

app.listen(port, () => {
    console.log("servidor corriendo en http://localhost:3000");
});
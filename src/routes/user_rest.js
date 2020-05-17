'use strict';
const express = require('express');
const UserController = require('./../controllers/user');

let api = express.Router();
const md_auth = require('../middlewares/authenticated');

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get('/user/:username', md_auth.ensureAuth, UserController.getUser);
api.get('/', (req, res) => {
    res.send('acp1-2020 api');
});
api.get('/apiblaao', (req, res) => {
    res.send('acp1-2020 api');
});

module.exports = api;

/*
const col = client.db(dbName).collection(collectionName);
col.find({}).toArray(function(err, items) {

    console.log(items);

    client.close();
});

server.post("/items", (request, response) => {
    const item = request.body;
    dbCollection.insertOne(item, (error, result) => { // callback of insertOne
        if (error) throw error;
        // return updated list
        dbCollection.find().toArray((_error, _result) => { // callback of find
            if (_error) throw _error;
            response.json(_result);
        });
});


dbCollection.find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);

    // << return response to client >>
});

// << db CRUD routes >>
server.post("/items", (request, response) => {
    const item = request.body;
    dbCollection.insertOne(item, (error, result) => { // callback of insertOne
        if (error) throw error;
        // return updated list
        dbCollection.find().toArray((_error, _result) => { // callback of find
            if (_error) throw _error;
            response.json(_result);
        });
    });
});

server.get("/items/:id", (request, response) => {
    const itemId = request.params.id;

    dbCollection.findOne({ id: itemId }, (error, result) => {
        if (error) throw error;
        // return item
        response.json(result);
    });
});

server.get("/items", (request, response) => {
    // return updated list
    dbCollection.find().toArray((error, result) => {
        if (error) throw error;
        response.json(result);
    });
});

server.put("/items/:id", (request, response) => {
    const itemId = request.params.id;
    const item = request.body;
    console.log("Editing item: ", itemId, " to be ", item);

    dbCollection.updateOne({ id: itemId }, { $set: item }, (error, result) => {
        if (error) throw error;
        // send back entire updated list, to make sure frontend data is up-to-date
        dbCollection.find().toArray(function (_error, _result) {
            if (_error) throw _error;
            response.json(_result);
        });
    });
});

server.delete("/items/:id", (request, response) => {
    const itemId = request.params.id;
    console.log("Delete item with id: ", itemId);

    dbCollection.deleteOne({ id: itemId }, function (error, result) {
        if (error) throw error;
        // send back entire updated list after successful request
        dbCollection.find().toArray(function (_error, _result) {
            if (_error) throw _error;
            response.json(_result);
        });
    });*/
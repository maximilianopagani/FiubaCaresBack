'use strict';
let User = require('./../models/user');

exports.getUser = function(req, res, next) {

    const userName = req.params.name || {};

    User.find({ user: userName }, (error, user) => {

        if(error) {
            return res.status(500).send({
                message: 'Error en la petición'
            });
        }

        if(!user) {
            return res.status(404).send({
                message: 'EL usuario no existe'
            });
        }

        return res.status(200).send({
            user
        });
    });
};
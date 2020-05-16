'use strict';
let User = require('./../models/user');


exports.getUser = function(req, res) {

    const userId = req.params.username;

    User.find({ user: userId }, (error, user) => {

        if(error) {
            return res.status(500).send({message: 'Error en la petición'});
        }

        if(!user) {
            return res.status(404).send({message: 'EL usuario no existe'});
        }

        /*followThisUser(req.user.sub, userId).then((value) => {
            user.password = undefined;*/
        return res.status(200).send({
            user
        });

    });
}
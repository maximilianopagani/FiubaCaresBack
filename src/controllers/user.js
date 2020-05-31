'use strict';
const Users = require('./../models/user');

exports.getUser = async function(req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    const userName = req.params.username || "";
    const pass = req.params.password || "";

    const result = await Users.find({
        name: userName,
        password: pass
        })
        .then(user => {
            if (!user) {
                return res.status(404)
                    .send({
                        message: "El usuario no existe"
                    });
            }
            return user;
        })
        .catch((err) => {
            console.error(err.message);
            return res.status(500)
                .send({
                    message: "Error en la petición"
                })
        });
    console.log(result);
    return res.status(200).send(result);
};

exports.getAll = async function(req, res) {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    const result = await Users.find({})
        .then(user => {
            if (!user)
                return res.status(404)
                .send({
                    message: "El usuario no existe"
                });

            return user;
        })
        .catch((err) => {
            console.error(err.message);
            return res.status(500)
                .send({
                    message: "Error en la petición"
                })
        });
    return res.status(200).send(result);
};
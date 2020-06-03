'use strict';
const aqp = require('api-query-params');
const Inscription = require('./../models/inscription');

exports.getAll = async function(req, res) {
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);

    const result = await Inscription.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .populate(population)
        .then(inscriptions => {
            if (!inscriptions)
                return res.status(404)
                    .send({
                        message: "No existen eventos"
                    });
            return inscriptions;
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

exports.save = async function(req, res) {
    const { event_id, dni, email, inscription_datetime } = req.body || "";
    const post = new Inscription({ event_id, dni, email, inscription_datetime });

    return _insertOrUpdate(post, res);
};

async function _insertOrUpdate(post, res) {

    const result = await post.save()
        .then(inscription => {
            if (!inscription) {
                return res.status(404)
                    .send({
                        message: "No existe evento asociado"
                    });
            }
            return inscription;
        })
        .catch((err) => {
            console.error(err.message);
            return res.status(500)
                .send({
                    message: "Error en la petición"
                })
        });

    return res.status(200).send(result);
}

exports.remove = function(req, res) {
    const inscriptionId = req.params.inscription_id || "";

    Inscription.deleteOne({ _id: inscriptionId})
        .then(event => {
            if (!event) {
                return res.status(404)
                    .send({
                        message: "No existe evento para borrar"
                    });
            }
            return event;
        })
        .catch((err) => {
            console.error(err.message);
            return res.status(500)
                .send({
                    message: "Error en la petición"
                })
        });

    return res.status(204).send("Evento borrado");
};
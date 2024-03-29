'use strict';
const aqp = require('api-query-params');
const Events = require('./../models/event');

exports.getEvent = async function(req, res) {
    const eventId = req.params.event_id || "";

    const result = await Events.findById(eventId)
        .then(event => {
            if (!event) {
                return res.status(404)
                    .send({
                        message: "No existe evento asociado"
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

    return res.status(200).send(result);
};

exports.getAll = async function(req, res) {
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);

    const result = await Events.find(filter)
                                .skip(skip)
                                .limit(limit)
                                .sort({meeting_datetime: -1})
                                .select(projection)
                                .populate(population)
                    .then(event => {
                        if (!event)
                            return res.status(404)
                                .send({
                                    message: "No existen eventos"
                                });
                        return event;
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
    const { title, description, author, img_src, meeting_datetime, meeting_place, quota } = req.body || "";
    const post = new Events({title, description, author, img_src, meeting_datetime, meeting_place, quota});

    return _insertOrUpdate(post, res);
};

exports.update = async function(req, res) {
    let post = await Events.findOne({ _id: req.params.event_id });
    req.body.meeting_datetime = req.body.meeting_datetime ? new Date(req.body.meeting_datetime) : post.meeting_datetime;
    post.set(req.body);

    return _insertOrUpdate(post, res);
};

async function _insertOrUpdate(post, res) {

    const result = await post.save()
        .then(event => {
            if (!event) {
                return res.status(404)
                    .send({
                        message: "No existe evento asociado"
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

    return res.status(200).send(result);
}

exports.remove = function(req, res) {
    const eventId = req.params.event_id || "";

    Events.deleteOne({ _id: eventId})
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
'use strict';
const aqp = require('api-query-params');
const Newsletter = require('./../models/newsletter');

exports.getAll = async function(req, res) {
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);

    const result = await Newsletter.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .populate(population)
        .then(newsletters => {
            if (!newsletters)
                return res.status(404)
                    .send({
                        message: "No existen eventos"
                    });
            return newsletters;
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
    const { title, description, img_src, creation_datetime } = req.body || "";
    const post = new Newsletter({ title, description, img_src, creation_datetime });

    return _insertOrUpdate(post, res);
};

async function _insertOrUpdate(post, res) {

    const result = await post.save()
        .then(newsletter => {
            if (!newsletter) {
                return res.status(404)
                    .send({
                        message: "No existe newsletter asociado"
                    });
            }
            return newsletter;
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
    const NewsletterId = req.params.newsletter_id || "";

    Newsletter.deleteOne({ _id: NewsletterId})
        .then(newsletter => {
            if (!newsletter) {
                return res.status(404)
                    .send({
                        message: "No existe newsletter para borrar"
                    });
            }
            return newsletter;
        })
        .catch((err) => {
            console.error(err.message);
            return res.status(500)
                .send({
                    message: "Error en la petición"
                })
        });

    return res.status(204).send("Newsletter borrado");
};
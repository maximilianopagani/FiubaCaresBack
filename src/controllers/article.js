'use strict';
const aqp = require('api-query-params');
const Articles = require('./../models/article');

exports.getArticle = async function(req, res) {
    const articleId = req.params.article_id || "";

    const result = await Articles.findById(articleId)
        .then(article => {
            if (!article) {
                return res.status(404)
                    .send({
                        message: "No existe artículo asociado"
                    });
            }
            return article;
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

    const result = await Articles.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .populate(population)
        .then((articles) => {
            if (!articles)
                return res.status(404)
                    .send({
                        message: "No existen artículos"
                    });
            return articles;
        })
        .catch((err) => {
            console.error(err.message);

            return res.status(500)
                .send({
                    message: "Error en la petición de artículos"
                })
        });

    return res.status(200).send(result);
};

exports.save = async function(req, res) {
    const { title, description, author, img_src, source, preview } = req.body || "";
    const post = new Articles({ title, description, author, img_src, source, preview });

    return _insertOrUpdate(post, res);
};

exports.update = async function(req, res) {
    let post = await Articles.findOne({ _id: req.params.article_id });

    post.set(req.body);

    return _insertOrUpdate(post, res);
};

async function _insertOrUpdate(post, res) {

    const result = await post.save()
        .then(event => {
            if (!event) {
                return res.status(404)
                    .send({
                        message: "No existe artículo asociado"
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
    const articleId = req.params.article_id || "";

    Articles.deleteOne({ _id: articleId})
        .then(event => {
            if (!event) {
                return res.status(404)
                    .send({
                        message: "No existe artículo para borrar"
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

    return res.status(204).send("Artículo borrado");
};
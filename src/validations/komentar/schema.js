const Joi = require("joi");

exports.create = Joi.object().keys({
    id_user: Joi.number().required(),
    isi: Joi.string().required(),
})

exports.update = Joi.object().keys({
    isi: Joi.string(),
})
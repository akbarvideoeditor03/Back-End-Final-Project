const Joi = require("joi");

exports.create = Joi.object().keys({
    id_lokasi: Joi.number().required(),
    prestasi: Joi.string().required(),
    tahun: Joi.date().required(),
})

exports.update = Joi.object().keys({
    prestasi: Joi.string(),
    tahun: Joi.date()
})
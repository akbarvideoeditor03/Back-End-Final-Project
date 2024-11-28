const Joi = require("joi");

exports.create = Joi.object().keys({
    id_user: Joi.number().required(),
    keahlian: Joi.string().required(),
    tingkat: Joi.string().required(),
})

exports.update = Joi.object().keys({
    keahlian: Joi.string(),
    tingkat: Joi.string()
})
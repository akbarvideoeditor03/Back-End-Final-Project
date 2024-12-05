const Joi = require("joi");

exports.create = Joi.object().keys({
    id_user: Joi.number().required(),
    pelatihan: Joi.string().required(),
    tahun_mulai: Joi.date().required(),
    tahun_selesai: Joi.string().required(),
})

exports.update = Joi.object().keys({
    pelatihan: Joi.string(),
    tahun_mulai: Joi.date(),
    tahun_selesai: Joi.string()
})
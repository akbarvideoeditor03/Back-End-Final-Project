const Joi = require("joi");

exports.create = Joi.object().keys({
    id_user: Joi.number().required(),
    institusi: Joi.string().required(),
    jurusan: Joi.string().required(),
    tahun_mulai: Joi.date().required(),
    tahun_selesai: Joi.string().required(),
})

exports.update = Joi.object().keys({
    institusi: Joi.string(),
    jurusan: Joi.string(),
    tahun_mulai: Joi.date(),
    tahun_selesai: Joi.string()
})
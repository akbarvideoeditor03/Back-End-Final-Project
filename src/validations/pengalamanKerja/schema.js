const Joi = require("joi");

exports.create = Joi.object().keys({
    id_user: Joi.number().required(),
    lokasi: Joi.string().required(),
    jabatan: Joi.string().required(),
    detail: Joi.string().required(),
    tahun_mulai: Joi.date().required(),
    tahun_selesai: Joi.string().required(),
})

exports.update = Joi.object().keys({
    lokasi: Joi.string(),
    jabatan: Joi.string(),
    detail: Joi.string(),
    tahun_mulai: Joi.date(),
    tahun_selesai: Joi.string(),
})
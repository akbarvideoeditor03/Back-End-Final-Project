const Joi = require("joi");

exports.create = Joi.object().keys({
    nama: Joi.string().required(),
    no_telp: Joi.string().required(),
    alamat: Joi.string().required(),
    tentang: Joi.string().required(),
    foto_profil: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})

exports.update = Joi.object().keys({
    nama: Joi.string(),
    no_telp: Joi.string(),
    alamat: Joi.string(),
    tentang: Joi.string(),
    foto_profil: Joi.string(),
    email: Joi.string(),
})
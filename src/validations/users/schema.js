const Joi = require("joi");

exports.create = Joi.object().keys({
    nama: Joi.string().required(),
    no_telp: Joi.string().required(),
    alamat: Joi.string().required(),
    tentang: Joi.string().required().custom((value, helpers) => {
        const wordCount = value.trim().split(/\s+/).length;
        if (wordCount > 100) {
            return helpers.error("any.invalid", {message: "Maximum description 100 words"});
        }
        return value;
    }),
    foto_profil: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})

exports.update = Joi.object().keys({
    nama: Joi.string(),
    no_telp: Joi.string(),
    alamat: Joi.string(),
    tentang: Joi.string().custom((value, helpers) => {
        const wordCount = value.trim().split(/\s+/).length;
        if (wordCount > 100) {
            return helpers.error("any.invalid", {message: "Maximum description 100 words"});
        }
        return value;
    }),
    foto_profil: Joi.string(),
    email: Joi.string(),
})
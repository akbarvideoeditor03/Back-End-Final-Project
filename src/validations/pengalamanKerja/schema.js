const Joi = require("joi");

exports.create = Joi.object().keys({
    id_user: Joi.number().required(),
    pengalaman_kerja: Joi.string().required(),
    jabatan: Joi.string().required(),
    deskripsi: Joi.string().required().custom((value, helpers) => {
        const wordCount = value.trim().split(/\s+/).length;
        if (wordCount > 100) {
            return helpers.error("any.invalid", {message: "Maximum description 100 words"});
        }
        return value;
    }),
    tahun_mulai: Joi.date().required(),
    tahun_selesai: Joi.date().required(),
})

exports.update = Joi.object().keys({
    pengalaman_kerja: Joi.string(),
    jabatan: Joi.string(),
    deskripsi: Joi.string().custom((value, helpers) => {
        const wordCount = value.trim().split(/\s+/).length;
        if (wordCount > 100) {
            return helpers.error("any.invalid", {message: "Maximum description 100 words"});
        }
        return value;
    }),
    tahun_mulai: Joi.date(),
    tahun_selesai: Joi.date(),
})
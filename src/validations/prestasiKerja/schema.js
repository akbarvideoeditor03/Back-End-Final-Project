const Joi = require("joi");

exports.create = Joi.object().keys({
    id_pengalaman_kerja: Joi.number().required(),
    prestasi: Joi.string().required().custom((value, helpers) => {
        const wordCount = value.trim().split(/\s+/).length;
        if (wordCount > 20) {
            return helpers.error("any.invalid", {message: "You have exceeded the maximum limit"})
        }
    }),
    tahun: Joi.date().required(),
})

exports.update = Joi.object().keys({
    prestasi: Joi.string().custom((value, helpers) => {
        const wordCount = value.trim().split(/\s+/).length;
        if (wordCount > 20) {
            return helpers.error("any.invalid", {message: "You have exceeded the maximum limit"})
        }
    }),
    tahun: Joi.date()
})
const Joi = require("joi");

exports.create = Joi.object().keys({
    link_gambar: Joi.string().required(),
    caption: Joi.string().required(),
    link_page: Joi.string().required(),
    
})

exports.update = Joi.object().keys({
    link_gambar: Joi.string(),
    caption: Joi.string(),
    link_page: Joi.string(),
})
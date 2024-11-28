const Keahlians = require('../../services/keahlian.service');
const keahlianValidation = require('../../validations/keahlian');

exports.getKeahlian = async (req, res, next) => {
    try {
        const keahlian = new Keahlians();
        const { data, meta } = await keahlian.getKeahlian()

        return res.status(200).json({
            success: true,
            message: 'Get data success',
            data,
            meta,
        })
    } catch (error) {
        next(error);
    }
}

exports.getKeahlianId = async (req, res, next) => {
    try {
        const keahlian = new Keahlians();
        const { id_user } = req.params;
        const { data } = await keahlian.getKeahlianId(parseInt(id_user));

        return res.status(200).json({
            success: true,
            message: 'Get user detail success',
            data,
        })
    } catch (error) {
        next(error);
    }
}

exports.createKeahlian = async (req, res, next) => {
    try {
        keahlianValidation.validateCreatePayload(req.body)
        const keahlian = new Keahlians();
        const data = await keahlian.createKeahlian(
            req.body.id_user,
            req.body.keahlian,
            req.body.tingkat
        );

        return res.status(201).json({
            success: true,
            message: 'Create data success',
            data,
        })
    } catch (error) {
        next(error);
    }
}

exports.updateKeahlian = async (req, res, next) => {
    try {
        keahlianValidation.validateUpdatePayload(req.body)
        const keahlian = new Keahlians();
        await keahlian.updateKeahlian(
            req.params.id,
            req.body.keahlian,
            req.body.tingkat
        );

        return res.status(200).json({
            success: true,
            message: 'Update data successfully',
        })
    } catch (error) {
        next(error);
    }
}

exports.deleteKeahlian = async (req, res, next) => {
    try {
        const keahlian = new Keahlians();
        await keahlian.deleteKeahlian(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Delete data successfully',
        })
    } catch (error) {
        next(error);
    }
}
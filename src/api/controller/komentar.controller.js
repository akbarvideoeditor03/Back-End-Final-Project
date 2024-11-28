const Komentars = require('../../services/komentar.service');
const komentarValidation = require('../../validations/komentar');

exports.getKomentar = async (req, res, next) => {
    try {
        const komentar = new Komentars();
        const { data, meta } = await komentar.getKomentar()

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

exports.getKomentarId = async (req, res, next) => {
    try {
        const komentar = new Komentars();
        const { id_user } = req.params;
        const { data } = await komentar.getKomentarId(parseInt(id_user));

        return res.status(200).json({
            success: true,
            message: 'Get user detail success',
            data,
        })
    } catch (error) {
        next(error);
    }
}

exports.createKomentar = async (req, res, next) => {
    try {
        komentarValidation.validateCreatePayload(req.body)
        const komentar = new Komentars();
        const data = await komentar.createKomentar(
            req.body.id_user,
            req.body.isi
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

exports.updateKomentar = async (req, res, next) => {
    try {
        komentarValidation.validateUpdatePayload(req.body)
        const komentar = new Komentars();
        await komentar.updateKomentar(
            req.params.id,
            req.body.isi
        );

        return res.status(200).json({
            success: true,
            message: 'Update data successfully',
        })
    } catch (error) {
        next(error);
    }
}

exports.deleteKomentar = async (req, res, next) => {
    try {
        const komentar = new Komentars();
        await komentar.deleteKomentar(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Delete data successfully',
        })
    } catch (error) {
        next(error);
    }
}
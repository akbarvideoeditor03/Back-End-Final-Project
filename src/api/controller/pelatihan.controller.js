const Pelatihans = require('../../services/pelatihan.service');
const pelatihanValidation = require('../../validations/pelatihan');

exports.getPelatihan = async (req, res, next) => {
    try {
        const pelatihan = new Pelatihans();
        const { data, meta } = await pelatihan.getPelatihan()

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

exports.getPelatihanId = async (req, res, next) => {
    try {
        const pelatihan = new Pelatihans();
        const { id_user } = req.params;
        const { data } = await pelatihan.getPelatihanId(parseInt(id_user));

        return res.status(200).json({
            success: true,
            message: 'Get user detail success',
            data,
        })
    } catch (error) {
        next(error);
    }
}

exports.createPelatihan = async (req, res, next) => {
    try {
        pelatihanValidation.validateCreatePayload(req.body)
        const pelatihan = new Pelatihans();
        const data = await pelatihan.createPelatihan(
            req.body.id_user,
            req.body.pelatihan,
            req.body.tahun_mulai,
            req.body.tahun_selesai
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

exports.updatePelatihan = async (req, res, next) => {
    try {
        pelatihanValidation.validateUpdatePayload(req.body)
        const pelatihan = new Pelatihans();
        await pelatihan.updatePelatihan(
            req.params.id,
            req.body.pelatihan,
            req.body.tahun_mulai,
            req.body.tahun_selesai
        );

        return res.status(200).json({
            success: true,
            message: 'Update data successfully',
        })
    } catch (error) {
        next(error);
    }
}

exports.deletePelatihan = async (req, res, next) => {
    try {
        const pelatihan = new Pelatihans();
        await pelatihan.deletePelatihan(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Delete data successfully',
        })
    } catch (error) {
        next(error);
    }
}
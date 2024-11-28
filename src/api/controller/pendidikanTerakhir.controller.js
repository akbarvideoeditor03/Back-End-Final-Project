const PendidikanTerakhirs = require('../../services/pendidikanTerakhirService');
const pendidikanTerakhirValidation = require('../../validations/pendidikanTerakhir');

exports.getPendidikanTerakhir = async (req, res, next) => {
    try {
        const pendidikanTerakhir = new PendidikanTerakhirs();
        const { page = 1, limit = 10 } = req.query;
        const { data, meta } = await pendidikanTerakhir.getPendidikanTerakhir({
            page: parseInt(page),
            limit: parseInt(limit)
        })

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

exports.getPendidikanTerakhirId = async (req, res, next) => {
    try {
        const pendidikanTerakhir = new PendidikanTerakhirs();
        const { id_user } = req.params;
        const { data } = await pendidikanTerakhir.getPendidikanTerakhirId(parseInt(id_user));

        return res.status(200).json({
            success: true,
            message: 'Get user detail success',
            data,
        })
    } catch (error) {
        next(error);
    }
}

exports.createPendidikanTerakhir = async (req, res, next) => {
    try {
        pendidikanTerakhirValidation.validateCreatePayload(req.body)
        const pendidikanTerakhir = new PendidikanTerakhirs();
        const data = await pendidikanTerakhir.createPendidikanTerakhir(
            req.body.id_user,
            req.body.institusi,
            req.body.jurusan,
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

exports.updatePendidikanTerakhir = async (req, res, next) => {
    try {
        pendidikanTerakhirValidation.validateUpdatePayload(req.body)
        const pendidikanTerakhir = new PendidikanTerakhirs();
        await pendidikanTerakhir.updatePendidikanTerakhir(
            req.params.id,
            req.body.institusi,
            req.body.jurusan,
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

exports.deletePendidikanTerakhir = async (req, res, next) => {
    try {
        const pendidikanTerakhir = new PendidikanTerakhirs();
        await pendidikanTerakhir.deletePendidikanTerakhir(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Delete data successfully',
        })
    } catch (error) {
        next(error);
    }
}
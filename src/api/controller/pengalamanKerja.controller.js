const PengalamanKerjas = require('../../services/pengalamanKerjaService');
const pengalamanKerjaValidation = require('../../validations/pengalamanKerja');

exports.getPengalamanKerja = async (req, res, next) => {
    try {
        const pengalamanKerja = new PengalamanKerjas();
        const { page = 1, limit = 10 } = req.query;
        const { data, meta } = await pengalamanKerja.getPengalamanKerja({
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

exports.getPengalamanKerjaId = async (req, res, next) => {
    try {
        const pengalamanKerja = new PengalamanKerjas();
        const { id_user } = req.params;
        const { data } = await pengalamanKerja.getPengalamanKerjaId(parseInt(id_user));

        return res.status(200).json({
            success: true,
            message: 'Get user detail success',
            data,
        })
    } catch (error) {
        next(error);
    }
}

exports.createPengalamanKerja = async (req, res, next) => {
    try {
        pengalamanKerjaValidation.validateCreatePayload(req.body)
        const pengalamanKerja = new PengalamanKerjas();
        const data = await pengalamanKerja.createPengalamanKerja(
            req.body.id_user,
            req.body.pengalaman_kerja,
            req.body.jabatan,
            req.body.deskripsi,
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

exports.updatePengalamanKerja = async (req, res, next) => {
    try {
        pengalamanKerjaValidation.validateUpdatePayload(req.body)
        const pengalamanKerja = new PengalamanKerjas();
        await pengalamanKerja.updatePengalamanKerja(
            req.params.id,
            req.body.pengalaman_kerja,
            req.body.jabatan,
            req.body.deskripsi,
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

exports.deletePengalamanKerja = async (req, res, next) => {
    try {
        const pengalamanKerja = new PengalamanKerjas();
        await pengalamanKerja.deletePengalamanKerja(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Delete data successfully',
        })
    } catch (error) {
        next(error);
    }
}
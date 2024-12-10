const PrestasiKerjas = require('../../services/prestasiKerjaService');
const prestasiKerjaValidation = require('../../validations/prestasiKerja');

exports.getPrestasiKerja = async (req, res, next) => {
    try {
        const prestasiKerja = new PrestasiKerjas();
        const { data, meta } = await prestasiKerja.getPrestasiKerja()

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

exports.getPrestasiKerjaId = async (req, res, next) => {
    try {
        const prestasiKerja = new PrestasiKerjas();
        const { id_pengalaman_kerja } = req.params;
        const { data } = await prestasiKerja.getPrestasiKerjaId(parseInt(id_pengalaman_kerja));

        return res.status(200).json({
            success: true,
            message: 'Get prestasi success',
            data,
        })
    } catch (error) {
        next(error);
    }
}

exports.createPrestasiKerja = async (req, res, next) => {
    try {
        prestasiKerjaValidation.validateCreatePayload(req.body)
        const prestasiKerja = new PrestasiKerjas();
        const data = await prestasiKerja.createPrestasiKerja(
            req.body.id_lokasi,
            req.body.prestasi,
            req.body.tahun,
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

exports.updatePrestasiKerja = async (req, res, next) => {
    try {
        prestasiKerjaValidation.validateUpdatePayload(req.body)
        const prestasiKerja = new PrestasiKerjas();
        await prestasiKerja.updatePrestasiKerja(
            req.params.id,
            req.params.id_pengalaman_kerja,
            req.body.prestasi,
            req.body.tahun
        );

        return res.status(200).json({
            success: true,
            message: 'Update data successfully',
        })
    } catch (error) {
        next(error);
    }
}

exports.deletePrestasiKerja = async (req, res, next) => {
    try {
        const prestasiKerja = new PrestasiKerjas();
        await prestasiKerja.deletePrestasiKerja(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Delete data successfully',
        })
    } catch (error) {
        next(error);
    }
}
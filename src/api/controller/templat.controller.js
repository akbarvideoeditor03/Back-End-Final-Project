const Templats = require('../../services/templatServices');
const templatValidation = require('../../validations/templat');

exports.getTemplat = async (req, res, next) => {
    try {
        const templatCV = new Templats();
        const { data, meta } = await templatCV.getTemplat()

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

exports.getTemplatId = async (req, res, next) => {
    try {
        const templatCV = new Templats();
        const { id_user } = req.params;
        const { data } = await templatCV.getTemplatId(parseInt(id));

        return res.status(200).json({
            success: true,
            message: 'Get templat CV success',
            data,
        })
    } catch (error) {
        next(error);
    }
}

exports.createTemplat = async (req, res, next) => {
    try {
        templatValidation.validateCreatePayload(req.body)
        const templatCV = new Templats();
        const data = await templatCV.createTemplat(
            req.body.link_gambar,
            req.body.caption,
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

exports.updateTemplat = async (req, res, next) => {
    try {
        templatValidation.validateUpdatePayload(req.body);
        const templatCV = new Templats();
        const result = await templatCV.updateTemplat(
            req.params.id,
            req.body.link_gambar,
            req.body.caption,
        );

        if (result.status === 404) {
            return res.status(404).json({
                success: false,
                message: 'Data not found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Update data successfully',
        });
    } catch (error) {
        next(error);
    }
};


exports.deleteTemplat = async (req, res, next) => {
    try {
        const templatCV = new Templats();
        await templatCV.deleteTemplat(
            req.params.id,
        );

        return res.status(200).json({
            success: true,
            message: 'Delete data successfully',
        })
    } catch (error) {
        next(error);
    }
}
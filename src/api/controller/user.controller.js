const UserService = require('../../services/usersService');
const userValidation = require('../../validations/users');

exports.getUsers = async (req, res, next) => {
    try {
        const userService = new UserService();
        const { page = 1, limit = 10 } = req.query
        const { data, meta } = await userService.getUsers({
            page:parseInt(page),
            limit:parseInt(limit)
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

exports.getUsersById = async (req, res, next) => {
    try {
        const userService = new UserService();
        const { id } = req.params;
        const { data } = await userService.getUsersById(parseInt(id));

        return res.status(200).json({
            success: true,
            message: 'Get user detail success',
            data,
        })
    } catch (error) {
        next(error);
    }
}

exports.createUsers = async (req, res, next) => {
    try {
        userValidation.validateCreatePayload(req.body)
        const userService = new UserService();
        const data = await userService.createUsers(
            req.body.nama,
            req.body.no_telp,
            req.body.alamat,
            req.body.tentang,
            req.body.foto_profil,
            req.body.email,
            req.body.password
        );

        return res.status(201).json({
            success: true,
            message: 'Create data success',
            data : {
                id : data.id,
                nama : data.nama,
                no_telp : data.no_telp,
                alamat : data.alamat,
                tentang: data.tentang,
                email: data.email,
            },
        })
    } catch (error) {
        next(error);
    }
}

exports.updateUsers = async (req, res, next) => {
    try {
        userValidation.validateUpdatePayload(req.body)
        const userService = new UserService();
        await userService.updateUsers(
            req.params.id,
            req.body.nama,
            req.body.no_telp,
            req.body.alamat,
            req.body.tentang,
            req.body.foto_profil,
            req.body.email,
            req.body.password,
        );

        return res.status(200).json({
            success: true,
            message: 'Update data successfully',
        })
    } catch (error) {
        next(error);
    }
}

exports.deleteUsers = async (req, res, next) => {
    try {
        const userService = new UserService();
        await userService.deleteUsers(req.params.id);

        return res.status(200).json({
            success: true,
            message: 'Delete data successfully',
        })
    } catch (error) {
        next(error);
    }
}
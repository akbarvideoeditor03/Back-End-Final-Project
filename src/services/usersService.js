const { User } = require('../models');
const { response } = require('express');
const { encrypt } = require('../utils/password.util');

class UserService {
    async getUsers({ page, limit } = { page: 1, limit: 10 }) {
        const queryParams = {
            attributes: { exclude: ['foto_profil', 'password', 'role'] }
        }

        const countUsers = await User.count()
        const users = await User.findAll(queryParams);

        return {
            data: users,
            meta: {
                totalData: countUsers,
            },
        }
    }

    async getUsersById(id) {
        const queryParams = {
            attributes: { exclude: ['role'] }
        }
        const usersId = await User.findByPk(id, queryParams)

        if (!usersId) {
            return response.status(404).json({ message: 'Data not found' })
        }
        return { data: usersId }
    }

    async createUsers(nama, no_telp, alamat, tentang, foto_profil, email, password) {
        const hashedPassword = await encrypt(password);

        const users = await User.create({nama, no_telp, alamat, tentang, foto_profil, email, password: hashedPassword})
        return users
    }

    async updateUsers(id, nama, no_telp, alamat, tentang, foto_profil, email, password){
        const hashedPassword = await encrypt(password);
        const usersId = await User.findByPk(id);
        if (!usersId) {
            return response.status(404).json({ message: 'Data tidak ditemukan' })
        }
        return await User.update(
            {nama, no_telp, alamat, tentang, foto_profil, email, password: hashedPassword},
            {
                where: {
                    id,
                },
            },
        )
    }

    async deleteUsers(id) {
        const usersId = await User.findByPk(id)
        if (!usersId) {
            return response.status(404).json({ message: 'Data tidak ditemukan' })
        }
        return await User.destroy({
            where : {
                id,
            },
        });
    };
}

module.exports = UserService;
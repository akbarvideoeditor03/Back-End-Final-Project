const bcrypt = require('bcrypt');
const { User } = require('../models');
const { response } = require('express');


class UserService {
    async getUsers({ page, limit } = { page: 1, limit: 10 }) {
        const queryParams = {
            offset: (page - 1) * limit,
            limit: limit,
            attributes: { exclude: ['foto_profil', 'password', 'role'] }
        }

        const countUsers = await User.count()
        const totalPage = Math.ceil(countUsers / limit) || parseInt(page)
        const users = await User.findAll(queryParams);

        return {
            data: users,
            meta: {
                page: parseInt(page),
                totalPage: totalPage !== Infinity ? totalPage : parseInt(page),
                totalData: countUsers,
                totalDataOnPage: users.lenght
            },
        }
    }

    async getUsersById(id) {
        const queryParams = {
            attributes: { exclude: ['password', 'role'] }
        }
        const usersId = await User.findByPk(id, queryParams)

        if (!usersId) {
            return response.status(404).json({ message: 'Data not found' })
        }
        return { data: usersId }
    }

    async createUsers(nama, no_telp, alamat, tentang, foto_profil, email, password) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const users = await User.create({nama, no_telp, alamat, tentang, foto_profil, email, password: hashedPassword})
        return users
    }

    async updateUsers(id, nama, no_telp, alamat, tentang, foto_profil, email){
        const usersId = await User.findByPk(id)
        if (!usersId) {
            return response.status(404).json({ message: 'Data tidak ditemukan' })
        }
        return await User.update(
            {nama, no_telp, alamat, tentang, foto_profil, email},
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
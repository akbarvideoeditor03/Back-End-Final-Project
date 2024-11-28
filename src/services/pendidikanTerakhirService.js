const { PendidikanTerakhir } = require('../models');
const { response } = require('express');

class PendidikanTerakhirs {
    async getPendidikanTerakhir({ page, limit } = { page: 1, limit: 10 }) {
        const queryParams = {
            offset: (page - 1) * limit,
            limit: limit,
        };

        const countPendidikanTerakhir = await PendidikanTerakhir.count();
        const totalPage = Math.ceil(countPendidikanTerakhir / limit) || parseInt(page)
        const pendidikanTerakhir = await PendidikanTerakhir.findAll(queryParams);

        return {
            data: pendidikanTerakhir,
            meta: {
                page: parseInt(page),
                totalPage: totalPage !== Infinity ? totalPage : parseInt(page),
                totalPage: countPendidikanTerakhir,
                totalDataOnPage: pendidikanTerakhir.length
            },
        }
    }

    async getPendidikanTerakhirId(id_user) {
        const pendidikanTerakhirId = await PendidikanTerakhir.findAll({
            where: { id_user: id_user }
        });

        if (!pendidikanTerakhirId) {
            return response.status(404).json({ message: 'Data not found' })
        }
        return { data: pendidikanTerakhirId }
    }

    async createPendidikanTerakhir(id_user, institusi, jurusan, tahun_mulai, tahun_selesai) {
        const pendidikanTerakhir = await PendidikanTerakhir.create({ id_user, institusi, jurusan, tahun_mulai, tahun_selesai });
        return pendidikanTerakhir;
    }

    async updatePendidikanTerakhir(id, institusi, jurusan, tahun_mulai, tahun_selesai) {
        const pendidikanTerakhir = await PendidikanTerakhir.findByPk(id)
        if (!pendidikanTerakhir) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await PendidikanTerakhir.update(
            { institusi, jurusan, tahun_mulai, tahun_selesai },
            {
                where: {
                    id,
                },
            },
        )
    }

    async deletePendidikanTerakhir(id) {
        const pendidikanTerakhir = await PendidikanTerakhir.findByPk(id)
        if (!pendidikanTerakhir) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await PendidikanTerakhir.destroy({
            where: {
                id,
            }
        })

    }
}

module.exports = PendidikanTerakhirs;
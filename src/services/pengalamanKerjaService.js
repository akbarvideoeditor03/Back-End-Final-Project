const { PengalamanKerja } = require('../models');
const { response } = require('express');

class PengalamanKerjas {
    async getPengalamanKerja({ page, limit } = { page: 1, limit: 10 }) {
        const queryParams = {
            offset: (page - 1) * limit,
            limit: limit,
        };

        const countPengalamanKerja = await PengalamanKerja.count();
        const totalPage = Math.ceil(countPengalamanKerja / limit) || parseInt(page)
        const pengalamanKerja = await PengalamanKerja.findAll(queryParams);

        return {
            data: pengalamanKerja,
            meta: {
                page: parseInt(page),
                totalPage: totalPage !== Infinity ? totalPage : parseInt(page),
                totalPage: countPengalamanKerja,
                totalDataOnPage: pengalamanKerja.lenght
            },
        }
    }

    async getPengalamanKerjaId(id_user) {
        const pengalamanKerjaId = await PengalamanKerja.findAll({
            where: { id_user: id_user }
        });

        if (!pengalamanKerjaId) {
            return response.status(404).json({ message: 'Data not found' })
        }
        return { data: pengalamanKerjaId }
    }

    async createPengalamanKerja(id_user, pengalaman_kerja, jabatan, deskripsi, tahun_mulai, tahun_selesai) {
        const pengalamanKerja = await PengalamanKerja.create({ id_user, pengalaman_kerja, jabatan, deskripsi, tahun_mulai, tahun_selesai });
        return pengalamanKerja;
    }

    async updatePengalamanKerja(id, pengalaman_kerja, jabatan, deskripsi, tahun_mulai, tahun_selesai) {
        const pengalamanKerja = await PengalamanKerja.findByPk(id)
        if (!pengalamanKerja) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await PengalamanKerja.update(
            { pengalaman_kerja, jabatan, deskripsi, tahun_mulai, tahun_selesai },
            {
                where: {
                    id,
                },
            },
        )
    }

    async deletePengalamanKerja(id) {
        const deletePengalamanKerja = await PengalamanKerja.findByPk(id)
        if (!deletePengalamanKerja) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await PengalamanKerja.destroy({
            where: {
                id,
            }
        })

    }
}

module.exports = PengalamanKerjas;
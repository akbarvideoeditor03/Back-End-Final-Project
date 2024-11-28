const { PrestasiKerja } = require('../models');
const { response } = require('express');

class PrestasiKerjas {
    async getPrestasiKerja() {
        const prestasiKerja = await PrestasiKerja.findAll();
        return {
            data: prestasiKerja,
            meta: {
                totalData: prestasiKerja.length
            },
        }
    }

    async getPrestasiKerjaId(id_pengalaman_kerja) {
        const prestasiKerjaId = await PrestasiKerja.findAll({
            where: { id_pengalaman_kerja: id_pengalaman_kerja }
        });

        if (!prestasiKerjaId) {
            return response.status(404).json({ message: 'Data not found' })
        }
        return { data: prestasiKerjaId }
    }

    async createPrestasiKerja(id_pengalaman_kerja, prestasi, tahun) {
        const prestasiKerja = await PrestasiKerja.create({ id_pengalaman_kerja, prestasi, tahun });
        return prestasiKerja;
    }

    async updatePrestasiKerja(id, prestasi, tahun) {
        const prestasiKerja = await PrestasiKerja.findByPk(id)
        if (!prestasiKerja) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await PrestasiKerja.update(
            { prestasi, tahun },
            {
                where: {
                    id,
                },
            },
        )
    }

    async deletePrestasiKerja(id) {
        const prestasiKerja = await PrestasiKerja.findByPk(id)
        if (!prestasiKerja) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await PrestasiKerja.destroy({
            where: {
                id,
            }
        })

    }
}

module.exports = PrestasiKerjas;
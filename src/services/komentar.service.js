const { Komentar } = require('../models');
const { response } = require('express');

class Komentars {
    async getKomentar() {
        const komentarUser = await Komentar.findAll();
        return {
            data: komentarUser,
            meta: {
                totalData: komentarUser.length
            },
        }
    }

    async getKomentarId(id_user) {
        const komentarId = await Komentar.findAll({
            where: { id_user: id_user }
        });

        if (!komentarId) {
            return response.status(404).json({ message: 'Data not found' })
        }
        return { data: komentarId }
    }

    async createKomentar(id_user, isi) {
        const komentarUser = await Komentar.create({ id_user, isi });
        return komentarUser;
    }

    async updateKomentar(id, isi) {
        const komentarUser = await Komentar.findByPk(id)
        if (!komentarUser) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await Komentar.update(
            { isi },
            {
                where: {
                    id,
                },
            },
        )
    }

    async deleteKomentar(id) {
        const komentarUser = await Komentar.findByPk(id)
        if (!komentarUser) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await Komentar.destroy({
            where: {
                id,
            }
        })

    }
}

module.exports = Komentars;
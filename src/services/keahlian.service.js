const { Keahlian } = require('../models');
const { response } = require('express');

class Keahlians {
    async getKeahlian() {
        const keahlianUser = await Keahlian.findAll();
        return {
            data: keahlianUser,
            meta: {
                totalData: keahlianUser.length
            },
        }
    }

    async getKeahlianId(id_user) {
        const keahlianId = await Keahlian.findAll({
            where: { id_user: id_user }
        });

        if (!keahlianId) {
            return response.status(404).json({ message: 'Data not found' })
        }
        return { data: keahlianId }
    }

    async createKeahlian(id_user, keahlian, tingkat) {
        const keahlianUser = await Keahlian.create({ id_user, keahlian, tingkat });
        return keahlianUser;
    }

    async updateKeahlian(id, keahlian, tingkat) {
        const keahlianUser = await Keahlian.findByPk(id)
        if (!keahlianUser) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await Keahlian.update(
            { keahlian, tingkat },
            {
                where: {
                    id,
                },
            },
        )
    }

    async deleteKeahlian(id) {
        const keahlianUser = await Keahlian.findByPk(id)
        if (!keahlianUser) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await Keahlian.destroy({
            where: {
                id,
            }
        })

    }
}

module.exports = Keahlians;
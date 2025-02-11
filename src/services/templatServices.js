const { Templat } = require('../models');
const { response } = require('express');

class Templats {
    async getTemplat() {
        const templatCV = await Templat.findAll();
        return {
            data: templatCV,
            meta: {
                totalData: templatCV.length
            },
        }
    }

    async getTemplatId(id) {
        const templatId = await Templat.findAll({
            where: { id: id }
        });

        if (!templatId) {
            return response.status(404).json({ message: 'Data not found' })
        }
        return { data: templatId }
    }

    async createTemplat(id, link_gambar, caption) {
        const templatCV = await Templat.create({ id, link_gambar, caption });
        return templatCV;
    }

    async updateTemplat(id, link_gambar, caption) {
        const templatCV = await Templat.findByPk(id)
        if (!templatCV) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await Templat.update(
            { link_gambar, caption },
            {
                where: {
                    id,
                },
            },
        )
    }

    async deleteTemplat(id, id_user,) {
        const templatCV = await Templat.findByPk(id)
        if (!templatCV) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await Templat.destroy({
            where: {
                id,
            },
        })
    }
}

module.exports = Templats;
const { Pelatihan } = require('../models');
const { response } = require('express');

class Pelatihans {
    async getPelatihan() {
        const training = await Pelatihan.findAll();
        return {
            data: training,
            meta: {
                totalData: training.length
            },
        }
    }

    async getPelatihanId(id_user) {
        const trainingId = await Pelatihan.findAll({
            where: { id_user: id_user }
        });

        if (!trainingId) {
            return response.status(404).json({ message: 'Data not found' })
        }
        return { data: trainingId }
    }

    async createPelatihan(id_user, pelatihan, tahun_mulai, tahun_selesai) {
        const training = await Pelatihan.create({ id_user, pelatihan, tahun_mulai, tahun_selesai });
        return training;
    }

    async updatePelatihan(id, pelatihan, tahun_mulai, tahun_selesai) {
        const training = await Pelatihan.findByPk(id)
        if (!training) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await Pelatihan.update(
            { pelatihan, tahun_mulai, tahun_selesai },
            {
                where: {
                    id,
                },
            },
        )
    }

    async deletePelatihan(id) {
        const training = await Pelatihan.findByPk(id)
        if (!training) {
            return response.status(404).json({ message: 'Data not found' })
        }

        return await Pelatihan.destroy({
            where: {
                id,
            }
        })

    }
}

module.exports = Pelatihans;
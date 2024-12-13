"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("prestasi_kerja", [
            {
                id_pengalaman_kerja: 6,
                prestasi: 'Juara Umum Lomba Videografi',
                tahun: '2021-09-01',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("prestasi_kerja", null, {});
    },
};

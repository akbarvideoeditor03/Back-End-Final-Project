"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("pengalaman_kerja", [
            {
                id_user: 1,
                lokasi: 'PT Dimana Gitu',
                jabatan: 'Video Editor',
                detail: 'nanti dulu',
                tahun_mulai: '2021-09-01',
                tahun_selesai: 'Juli 2025',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("pengalaman_kerja", null, {});
    },
};

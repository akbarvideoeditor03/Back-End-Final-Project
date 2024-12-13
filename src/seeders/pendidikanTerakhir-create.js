"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("pendidikan_terakhir", [
            {
                id_user: 1,
                institusi: 'Universitas Dinamika Bangsa',
                jurusan: 'Sistem Informasi',
                tahun_mulai: '2021-09-01',
                tahun_selesai: 'Juli 2025',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("pendidikan_terakhir", null, {});
    },
};

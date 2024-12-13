"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("pelatihan", [
            {
                id_user: 1,
                pelatihan: 'Pelatihan Edit Video',
                tahun_mulai: '2022-01-01',
                tahun_selesai:"September 2022",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("pelatihan", null, {});
    },
};

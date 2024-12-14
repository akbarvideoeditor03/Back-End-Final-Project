"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("keahlian", [
            {
                id_user: 1, //sesuaikan dengan id user yang ada.
                keahlian: 'sebutkan keahlian yang kamu punya',
                tingkat: 'sebutkan tingkatan keahlian', //tingkatan yang dimaksud seperti pemula, pemula tingkat lanjut, kompeten, mahir, dan ahli.
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("keahlian", null, {});
    },
};

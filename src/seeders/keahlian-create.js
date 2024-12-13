"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("keahlian", [
            {
                id_user: 1,
                keahlian: 'Edit Video',
                tingkat: 'Kompeten',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("keahlian", null, {});
    },
};

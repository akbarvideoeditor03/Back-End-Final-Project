"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("templat", [
            {
                id: 1,
                link_gambar: 'link',
                caption: 'gambar contoh',
                link_page: 'link',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("templat", null, {});
    },
};

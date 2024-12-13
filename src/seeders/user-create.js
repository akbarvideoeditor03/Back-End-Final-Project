"use strict";

const passwordConfig = require('../utils/password.util');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("user", [
            {
                nama: 'John Doe',
                no_telp: '081234567890',
                alamat: 'Jl. Merpati No. 5',
                tentang: 'Pengguna aktif aplikasi.',
                foto_profil: 'profile1.jpg',
                email: 'johndoe@example.com',
                password: await passwordConfig.encrypt('12345678'),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("user", null, {});
    },
};

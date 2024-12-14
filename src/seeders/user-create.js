"use strict";

const passwordConfig = require('../utils/password.util');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("user", [
            {
                nama: 'John Doe',
                no_telp: '081122334455',
                alamat: 'nama jalan, nama desa/kelurahan, nama kabupaten/kota',
                tentang: 'tuliskan tentang kamu',
                foto_profil: 'unggah file foto profil kamu',
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

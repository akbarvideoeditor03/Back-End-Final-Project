const { where } = require('sequelize');
const db = require('../../models');
const User = db.User;
const passwordUtil = require('../../utils/password.util');
const tokenUtils = require('../../utils/token.util');

const register = async (req, res) => {
    await User.create({
        nama: req.body.nama,
        no_telp: req.body.no_telp,
        alamat: req.body.alamat,
        tentang: req.body.tentang,
        foto_profil: req.body.foto_profil,
        email: req.body.email,
        password: await passwordUtil.encrypt(req.body.password),
    });

    return res.status(200).json({
        success: true,
        message: 'Daftar Pengguna Berhasil!',
    });
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(401).json({ message: 'Pengguna tidak ditemukan atau belum terdaftar' });
        }

        const isPasswordValid = await passwordUtil.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Akses tidak sah. Silakan periksa kredensial Anda.' });
        }

        const { token } = await tokenUtils.encode(user);
        return res.status(200).json({
            id:user.id,
            role: user.role,
            token: token,
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: `Terjadi kesalahan pada server. ${error}` });
    }
};

module.exports = { register, login };

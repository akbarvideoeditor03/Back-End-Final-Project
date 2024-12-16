const { where } = require('sequelize');
const db = require('../../models');
const User = db.User;
const passwordUtil = require('../../utils/password.util');
const tokenUtils = require('../../utils/token.util');
const otpUtils = require('../../utils/otp.util');

const register = async (req, res) => {
    const exitingUser = await User.findOne({
        where: {email : req.body.email },
    });
    
    if (exitingUser) {
        return res.status(400).json({
            message: 'Email sudah terdaftar, silakan gunakan email lain.',
        });
    }

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

const askResetPassword = async (req, res) => {
    const { email } = req.body;
    if(!email) {
        return res.status(400).json({message: `Email dibutuhkan.`})
    }
    const user = await User.findOne({where : {email: req.body.email}});
    if(!user) {
        return res.status(404).json({message: `Pengguna tidak ditemukan.`})
    }
    const OTP = otpUtils.otpCode();
    const expCode = new Date();
    expCode.setMinutes(expCode.getMinutes() + 5);

    user.otp = OTP;
    user.expCode = expCode;
    await user.save();

    try {
        await otpUtils.mailOtp(email, OTP);
        return res.status(200).json({
            message: `Password reset OTP sudah dikirim.`,
        });
    } catch (error) {
        return res.status(500).json({
            message: `OTP password reset gagal dikirimkan `,
        })
    }
}

const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    if(!email) {
        return res.status(400).json({
            message: `Email diperlukan.`
        })
    }
    if(!otp) {
        return res.status(400).json({
            message: `OTP diperlukan.`
        })
    }
    if(!newPassword) {
        return res.status(400).json({
            message: `Password baru diperlukan.`
        })
    }

    const user = await User.findOne({where: {email: req.body.email}});
    if(!user) {
        return res.status(401).json({ message: 'Pengguna tidak ditemukan atau belum terdaftar.' });
    }

    if (user.otp !== otp) {
        return res.status(401).json({ message: `Kode OTP salah, ${user.otp}, ${otp}` });
    }    
    
    if (new Date() > user.expCode) {
        return res.status(401).json({ message: 'Kode OTP sudah kadaluarsa.' });
    }

    user.password = await passwordUtil.encrypt(req.body.newPassword);
    user.otp = null;
    user.expCode = null;
    await user.save();

    return res.status(200).json({
        message: 'Password berhasil direset'
    });
}

module.exports = { register, login, askResetPassword, resetPassword };

const nodeMailer = require('nodemailer');

const otpCode = () => {
    return Math.floor(10000 + Math.random() * 75000);
};

const mailOtp = async (email, otp) => {
    const transporter = nodeMailer.createTransport({
        service : 'gmail',
        auth : {
            user : process.env.KOPI_GMAIL,
            pass: process.env.KOPI_RESET_PASSWORD,
        }
    })

    const mailOptions = {
        from: process.env.KOPI_GMAIL,
        to: email,
        subject: 'Kring-Kring! ada kode OTP dari KOPI nih',
        text: `${otp} adalah nomor kode otp kamu. Buruan dipakai, validnya cuma 5 menit loh...`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`OTP sudah dikirimkan ke ${email}: ${otp}`);
    } catch (error) {
        console.error(`Gagal saat mengirimkan otp ke email`, error);
        throw new Error('Gagal mengirimkan OTP');
    }
}

module.exports = { otpCode, mailOtp}
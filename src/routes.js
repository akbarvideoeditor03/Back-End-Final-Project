const router = require('express').Router();
const usersRoute = require('./api/routes/users.route');
const pengalamanKerjaRoute = require('./api/routes/pengalamanKerja.route');
const prestasiKerjaRoute = require('./api/routes/prestasiKerja.route');
const pendidikanTerakhir = require('./api/routes/pendidikanTerakhir.route');
const pelatihan = require('./api/routes/pelatihan.route');
const keahlian = require('./api/routes/keahlian.route');
const authRoute = require('./api/routes/auth.route');
const AuthMiddle = require('./middleware/authentication');

router.use('/kopi/user', usersRoute);
router.use('/kopi/user', authRoute);

router.use(AuthMiddle);
router.use('/kopi/pengalamankerja', pengalamanKerjaRoute);
router.use('/kopi/prestasikerja', prestasiKerjaRoute);
router.use('/kopi/pendidikanterakhir', pendidikanTerakhir);
router.use('/kopi/pelatihan', pelatihan);
router.use('/kopi/keahlian', keahlian);

module.exports = router;
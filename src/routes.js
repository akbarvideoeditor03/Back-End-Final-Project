const router = require('express').Router();
const usersRoute = require('./api/routes/users.route');
const pengalamanKerjaRoute = require('./api/routes/pengalamanKerja.route');
const prestasiKerjaRoute = require('./api/routes/prestasiKerja.route');
const pendidikanTerakhir = require('./api/routes/pendidikanTerakhir.route');
const pelatihan = require('./api/routes/pelatihan.route');
const keahlian = require('./api/routes/keahlian.route');
const authRoute = require('./api/routes/auth.route');
const AuthMiddle = require('./middleware/authentication');

router.use('/user', usersRoute);
router.use('/user', authRoute);

router.use(AuthMiddle);
router.use('/pengalamankerja', pengalamanKerjaRoute);
router.use('/prestasikerja', prestasiKerjaRoute);
router.use('/pendidikanterakhir', pendidikanTerakhir);
router.use('/pelatihan', pelatihan);
router.use('/keahlian', keahlian);

module.exports = router;
const router = require('express').Router();
const usersRoute = require('./api/routes/users.route');
const pengalamanKerjaRoute = require('./api/routes/pengalamanKerja.route');
const prestasiKerjaRoute = require('./api/routes/prestasiKerja.route');
const pendidikanTerakhir = require('./api/routes/pendidikanTerakhir.route');
const pelatihan = require('./api/routes/pelatihan.route');
const keahlian = require('./api/routes/keahlian.route');
const authRoute = require('./api/routes/auth.route');
const AuthMiddle = require('./middleware/authentication');

router.use('api/v1/user', usersRoute);
router.use('api/v1/user', authRoute);

router.use(AuthMiddle);
router.use('api/v1/pengalamankerja', pengalamanKerjaRoute);
router.use('api/v1/prestasikerja', prestasiKerjaRoute);
router.use('api/v1/pendidikanterakhir', pendidikanTerakhir);
router.use('api/v1/pelatihan', pelatihan);
router.use('api/v1/keahlian', keahlian);

module.exports = router;
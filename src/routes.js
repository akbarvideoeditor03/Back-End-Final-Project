const router = require('express').Router();
const usersRoute = require('./api/routes/users.route');
const pengalamanKerjaRoute = require('./api/routes/pengalamanKerja.route');
const prestasiKerjaRoute = require('./api/routes/prestasiKerja.route');
const pendidikanTerakhir = require('./api/routes/pendidikanTerakhir.route');
const pelatihan = require('./api/routes/pelatihan.route');
const keahlian = require('./api/routes/keahlian.route');
const authRoute = require('./api/routes/auth.route');
const AuthMiddle = require('./middleware/authentication');

router.use('/api/v1/user', usersRoute);
router.use('/api/v1/user', authRoute);

router.use('/api/v1/pengalamankerja', AuthMiddle, pengalamanKerjaRoute);
router.use('/api/v1/prestasikerja', AuthMiddle, prestasiKerjaRoute);
router.use('/api/v1/pendidikanterakhir', AuthMiddle, pendidikanTerakhir);
router.use('/api/v1/pelatihan', AuthMiddle, pelatihan);
router.use('/api/v1/keahlian', AuthMiddle, keahlian);

module.exports = router;
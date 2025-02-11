const router = require('express').Router();
const usersRoute = require('./api/routes/users.route');
const pengalamanKerjaRoute = require('./api/routes/pengalamanKerja.route');
const prestasiKerjaRoute = require('./api/routes/prestasiKerja.route');
const pendidikanTerakhir = require('./api/routes/pendidikanTerakhir.route');
const pelatihan = require('./api/routes/pelatihan.route');
const keahlian = require('./api/routes/keahlian.route');
const templat = require('./api/routes/templat.route');
const authRoute = require('./api/routes/auth.route');
const AuthMiddle = require('./middleware/authentication');

router.use('/kopi/user', usersRoute);
router.use('/kopi/user', authRoute);

router.use('/kopi/pengalamankerja', AuthMiddle, pengalamanKerjaRoute);
router.use('/kopi/prestasikerja', AuthMiddle, prestasiKerjaRoute);
router.use('/kopi/pendidikanterakhir', AuthMiddle, pendidikanTerakhir);
router.use('/kopi/pelatihan', AuthMiddle, pelatihan);
router.use('/kopi/keahlian', AuthMiddle, keahlian);
router.use('/kopi/templat', AuthMiddle, templat);

module.exports = router;
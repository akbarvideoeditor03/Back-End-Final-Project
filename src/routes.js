const router = require('express').Router();
module.exports = router;

const usersRoute = require('./api/routes/users.route');
router.use('/user', usersRoute);

const pengalamanKerjaRoute = require('./api/routes/pengalamanKerja.route');
router.use('/pengalamankerja', pengalamanKerjaRoute);

const prestasiKerjaRoute = require('./api/routes/prestasiKerja.route');
router.use('/prestasikerja', prestasiKerjaRoute);

const pendidikanTerakhir = require('./api/routes/pendidikanTerakhir.route');
router.use('/pendidikanterakhir', pendidikanTerakhir);

const pelatihan = require('./api/routes/pelatihan.route');
router.use('/pelatihan', pelatihan);

const keahlian = require('./api/routes/keahlian.route');
router.use('/keahlian', keahlian);

const komentar = require('./api/routes/komentar.route');
router.use('/komentar', komentar);


module.exports = router;
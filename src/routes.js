const router = require('express').Router();
module.exports = router;

const usersRoute = require('./api/routes/users.route');
router.use('/user', usersRoute);

const pengalamanKerjaRoute = require('./api/routes/pengalamanKerja.route');
router.use('/pengalamankerja', pengalamanKerjaRoute);


module.exports = router;
const router = require('express').Router();
const pengalamanKerjaRoute = require('../controller/pengalamanKerja.controller');

router.get('/', pengalamanKerjaRoute.getPengalamanKerja);
router.get('/:id_user', pengalamanKerjaRoute.getPengalamanKerjaId);
router.post('/', pengalamanKerjaRoute.createPengalamanKerja);
router.put('/:id_user/:id', pengalamanKerjaRoute.updatePengalamanKerja);
router.delete('/:id_user/:id', pengalamanKerjaRoute.deletePengalamanKerja);

module.exports = router;
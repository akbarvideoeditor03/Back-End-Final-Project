const router = require('express').Router();

const prestasiKerjaRoute = require('../controller/prestasiKerja.controller');

router.get('/', prestasiKerjaRoute.getPrestasiKerja);
router.get('/:id_pengalaman_kerja', prestasiKerjaRoute.getPrestasiKerjaId);
router.post('/', prestasiKerjaRoute.createPrestasiKerja);
router.put('/:id_pengalaman_kerja/:id', prestasiKerjaRoute.updatePrestasiKerja);
router.delete('/:id_pengalaman_kerja/:id', prestasiKerjaRoute.deletePrestasiKerja);

module.exports = router;
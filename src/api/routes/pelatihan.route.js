const router = require('express').Router();

const pelatihan = require('../controller/pelatihan.controller');

router.get('/', pelatihan.getPelatihan);
router.get('/:id_user', pelatihan.getPelatihanId);
router.post('/', pelatihan.createPelatihan);
router.put('/:id_user/:id', pelatihan.updatePelatihan);
router.delete('/:id_user/:id', pelatihan.deletePelatihan);

module.exports = router;
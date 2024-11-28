const router = require('express').Router();

const komentar = require('../controller/komentar.controller');

router.get('/', komentar.getKomentar);
router.get('/:id_user', komentar.getKomentarId);
router.post('/', komentar.createKomentar);
router.put('/:id', komentar.updateKomentar);
router.delete('/:id', komentar.deleteKomentar);

module.exports = router;
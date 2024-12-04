const router = require('express').Router();
const keahlian = require('../controller/keahlian.controller');

router.get('/', keahlian.getKeahlian);
router.get('/:id_user', keahlian.getKeahlianId);
router.post('/', keahlian.createKeahlian);
router.put('/:id', keahlian.updateKeahlian);
router.delete('/:id', keahlian.deleteKeahlian);

module.exports = router;
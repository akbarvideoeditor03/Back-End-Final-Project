const router = require('express').Router();

const pendidikanTerakhirRoute = require('../controller/pendidikanTerakhir.controller');

router.get('/', pendidikanTerakhirRoute.getPendidikanTerakhir);
router.get('/:id_user', pendidikanTerakhirRoute.getPendidikanTerakhirId);
router.post('/', pendidikanTerakhirRoute.createPendidikanTerakhir);
router.put('/:id', pendidikanTerakhirRoute.updatePendidikanTerakhir);
router.delete('/:id', pendidikanTerakhirRoute.deletePendidikanTerakhir);

module.exports = router;
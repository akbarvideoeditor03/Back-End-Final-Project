const router = require('express').Router();

const templatRoute = require('../controller/templat.controller');

router.get('/', templatRoute.getTemplat);
router.get('/:id', templatRoute.getTemplatId);
router.post('/', templatRoute.createTemplat);
router.put('/:id', templatRoute.updateTemplat);
router.delete('/:id', templatRoute.deleteTemplat);

module.exports = router;
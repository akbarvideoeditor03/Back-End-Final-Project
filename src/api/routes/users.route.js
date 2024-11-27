const router = require('express').Router();

const UserController = require('../controller/user.controller');

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUsersById);
router.post('/', UserController.createUsers);
router.put('/:id', UserController.updateUsers);
router.delete('/:id', UserController.deleteUsers);

module.exports = router;
const router = require('express').Router();
const UserController = require('../controller/user.controller');
const AuthMiddle = require('../../middleware/authentication');

router.get('/', AuthMiddle, UserController.getUsers);
router.get('/:id' , AuthMiddle, UserController.getUsersById);
router.post('/', AuthMiddle, UserController.createUsers);
router.put('/:id', AuthMiddle, UserController.updateUsers);
router.delete('/:id', AuthMiddle, UserController.deleteUsers);

module.exports = router;
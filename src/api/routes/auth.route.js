const router = require('express').Router();
const AuthController = require('../controller/authentication.controller');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/glogin', AuthController.gLogin);
router.post('/trypasswordreset', AuthController.askResetPassword);
router.post('/passwordreset', AuthController.resetPassword);

module.exports = router;
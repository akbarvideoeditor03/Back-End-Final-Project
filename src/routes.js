const router = require('express').Router();
module.exports = router;

const usersRoute = require('./api/routes/users.route');
router.use('/user', usersRoute);


module.exports = router;
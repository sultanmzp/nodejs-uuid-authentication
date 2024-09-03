const {Register, Login, Logout} = require('../controllers/user.controller');//importing user controller
const express = require('express');
const { isAuthenticated } = require('../middleware/auth.middleware');

//get express router
const router = express.Router();

//route of signup: if abc.com/register entered
router.route('/register').post(Register);

//route of login: if abc.com/login entered
router.route('/login').post(Login);

//route of logout: if abc.com/logout entered
router.route('/logout').get(isAuthenticated,Logout);

//exporting router
module.exports = router;


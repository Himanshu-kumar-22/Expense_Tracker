const express = require('express')
const userController = require('../controllers/userController.js')

const router = express.Router()

//Redirect /api/users/signup to signup function in userController 
router.post('/signup', userController.signup);

//Redirect /api/users/signin to signin function in userController
router.post('/signin', userController.signin);

module.exports = router;
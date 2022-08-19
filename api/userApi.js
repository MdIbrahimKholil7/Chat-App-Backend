const express = require('express');
const { userSignup } = require('../controller/userContoller');
const router = express.Router()

router.post('/signup', userSignup)

module.exports = router
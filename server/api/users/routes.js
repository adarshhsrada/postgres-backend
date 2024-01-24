const express = require('express');
const router = express.Router();
const controller = require('./controller');
const { signupValidation } = require("./validation")


router.get('/getUser', controller.getUser);
router.post("/signup", signupValidation, controller.signup)
module.exports = router
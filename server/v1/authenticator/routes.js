const express = require('express');
const router = express.Router();

const Controller = require('./controller');


router.post("/setup", Controller.setup);
router.post("/verify", Controller.verify);

module.exports = router;

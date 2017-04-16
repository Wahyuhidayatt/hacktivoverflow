const express = require('express');
const router = express.Router();
const Controller = require('../controllers/login_registerController');

router.post('/register', Controller.create);

module.exports = router;

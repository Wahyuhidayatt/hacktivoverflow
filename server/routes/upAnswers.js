const express = require('express');
const router = express.Router();
const Controller = require('../controllers/upAnswerController');

router.post('/:id', Controller.up);

module.exports = router;

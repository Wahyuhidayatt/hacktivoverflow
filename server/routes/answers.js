const express = require('express');
const router = express.Router();
const Controller = require('../controllers/answerController');

router.post('/:id', Controller.create);

module.exports = router;

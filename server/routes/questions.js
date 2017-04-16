const express = require('express');
const router = express.Router();
const Controller = require('../controllers/questionController');

router.post('/', Controller.create);
router.get('/', Controller.getAll);

module.exports = router;

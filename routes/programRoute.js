const express = require('express');
const router = express.Router();
const ProgramController = require('../controllers/programController');

router.get('/program', ProgramController.program);

module.exports = router;
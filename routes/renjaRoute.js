const router = require('express').Router();
const renjaController = require('../controllers/renjaController');

router.get('/renja', renjaController.renja);

module.exports = router;
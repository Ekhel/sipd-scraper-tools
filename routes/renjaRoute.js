const router = require('express').Router();
const renjaController = require('../controllers/renjaController');

router.route('/renja', renjaController.renja).get();

module.exports = router;
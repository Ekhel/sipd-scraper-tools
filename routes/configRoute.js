const router = require('express').Router();
const fs = require('fs');
const configController = require('../controllers/configController');

router.route('/saveconfig', configController.saveconfig).post();

module.exports = router;
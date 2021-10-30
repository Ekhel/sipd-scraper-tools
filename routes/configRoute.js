const router = require('express').Router();
const configController = require('../controllers/configController');

router.route('/saveconfig', configController.saveconfig).post();
router.get('/setconfigauth', (req, res) => {
    res.render('config', {
        title: 'Seeting Auth SIPD'
    });
});

module.exports = router;
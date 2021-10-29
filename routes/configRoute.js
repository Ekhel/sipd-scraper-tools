const router = require('express').Router();
const renjaController = require('../controllers/configController');

router.get('/setconfigauth', (req, res) => {
    res.render('config', {
        title: 'Seeting Auth SIPD'
    });
});

module.exports = router;
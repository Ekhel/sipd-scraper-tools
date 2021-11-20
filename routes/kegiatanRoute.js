const express = require('express');
const router = express.Router();
const KegiatanController = require('../controllers/kegiatanController');

router.get('/kegiatan', KegiatanController.kegiatan);

module.exports = router;
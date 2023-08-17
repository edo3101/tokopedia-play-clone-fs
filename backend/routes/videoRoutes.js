const express = require('express');
const videoController = require('../controllers/videoController.js');

const router = express.Router();

router.get('/videos', videoController.getAllVideo);
router.get('/video/:id', videoController.getVideoById);

module.exports = router;

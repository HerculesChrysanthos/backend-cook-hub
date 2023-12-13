const express = require('express');
const router = express.Router();
const tagController = require('./tag.controller');

router.get('/', tagController.getTags);

module.exports = router;

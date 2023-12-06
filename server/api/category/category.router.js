const express = require('express');
const router = express.Router();
const { validator } = require('../../middleware/validate');
const categoryController = require('./category.controller');

router.get('/', categoryController.getAllCategories);

module.exports = router;

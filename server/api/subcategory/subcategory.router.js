const express = require('express');
const router = express.Router();
const subcategoryController = require('./subcategory.controller');

router.get('/', subcategoryController.getSubcategoriesByCategoryId);

module.exports = router;

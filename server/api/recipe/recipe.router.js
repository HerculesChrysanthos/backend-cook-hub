const express = require('express');
const router = express.Router();

const recipesController = require('./recipe.controller');

router.get('/', recipesController.getRecipes);

module.exports = router;

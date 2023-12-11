const express = require('express');
const router = express.Router();

const recipesController = require('./recipe.controller');

router.get('/', recipesController.getRecipes);

router.get('/:recipeId', recipesController.getRecipeById);

module.exports = router;

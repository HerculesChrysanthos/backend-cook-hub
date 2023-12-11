const express = require('express');
const router = express.Router();
const auth = require('../../middleware/check-auth');
const hasRecipeAccess = require('../../middleware/recipe-access');

const recipesController = require('./recipe.controller');

router.get('/', recipesController.getRecipes);

router.get(
  '/my-recipes',
  auth(),
  //hasRecipeAccess,
  recipesController.getMyRecipes
);

router.get('/:recipeId', recipesController.getRecipeById);

module.exports = router;

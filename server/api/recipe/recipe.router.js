const express = require('express');
const router = express.Router();
const auth = require('../../middleware/check-auth');
const hasRecipeAccess = require('../../middleware/recipe-access');
const multerHelper = require('../../helpers/multer.helper');
const { validator } = require('../../middleware/validate');
const recipeValidator = require('./recipe.validator');
const recipesController = require('./recipe.controller');

router.get('/', recipesController.getRecipes);

router.get(
  '/my-recipes',
  auth(),
  //hasRecipeAccess,

  recipesController.getMyRecipes
);

router.get('/:recipeId', recipesController.getRecipeById);

router.post(
  '/',
  auth(),
  multerHelper.prepareImages(1),
  validator(recipeValidator.createRecipeSchema),
  recipesController.createRecipe
);

router.delete(
  '/:recipeId',
  auth(),
  hasRecipeAccess,
  recipesController.deleteRecipeById
);

module.exports = router;

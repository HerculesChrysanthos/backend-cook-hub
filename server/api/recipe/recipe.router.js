const express = require('express');
const router = express.Router();
const auth = require('../../middleware/check-auth');
const hasRecipeAccess = require('../../middleware/recipe-access');
const multerHelper = require('../../helpers/multer.helper');
const { validator } = require('../../middleware/validate');
const recipeValidator = require('./recipe.validator');
const recipeController = require('./recipe.controller');

router.get('/', recipeController.getRecipes);

router.get(
  '/my-recipes',
  auth(),
  //hasRecipeAccess,

  recipeController.getMyRecipes
);

router.get('/:recipeId', recipeController.getRecipeById);

router.post(
  '/',
  auth(),
  multerHelper.prepareImages(1),
  validator(recipeValidator.createRecipeSchema),
  recipeController.createRecipe
);

router.put(
  '/:recipeId',
  auth(),
  hasRecipeAccess,
  multerHelper.prepareImages(1),
  validator(recipeValidator.editRecipeSchema),
  recipeController.editRecipe
);

router.delete(
  '/:recipeId',
  auth(),
  hasRecipeAccess,
  validator(recipeValidator.editRecipeSchema),
  recipeController.deleteRecipeById
);

module.exports = router;

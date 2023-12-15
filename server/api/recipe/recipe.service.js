const recipeRepository = require('./recipe.repository');
const sharpHelper = require('../../helpers/sharp.helper');
const imagekitClient = require('../../clients/imagekit-client');
const recipeHelper = require('./recipe.helper');

async function getRecipes(page, limit, searchQuery) {
  const totalRecipes = await recipeRepository.getRecipesCount(searchQuery);
  const recipes = await recipeRepository.getRecipes(page, limit, searchQuery);

  return { totalRecipes, recipes };
}

async function getRecipeById(recipeId) {
  return recipeRepository.getRecipeById(recipeId);
}

async function createRecipe(recipe, image) {
  const imageNames = recipeHelper.prepareImageNames(
    image.originalname,
    recipe.user
  );

  recipeHelper.addImagesToRecipe(recipe, imageNames);

  recipeHelper.resizeAndUploadImages(image.buffer, imageNames);

  //const category = await categoryService.getCategoryById(recipe.category);
  return recipeRepository.createRecipe(recipe);
}

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
};

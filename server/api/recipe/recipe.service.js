const recipeRepository = require('./recipe.repository');

async function getRecipes(page, limit, searchQuery) {
  return recipeRepository.getRecipes(page, limit, searchQuery);
}

async function getRecipeById(recipeId) {
  return recipeRepository.getRecipeById(recipeId);
}

module.exports = {
  getRecipes,
  getRecipeById,
};

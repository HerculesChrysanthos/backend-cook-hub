const recipeRepository = require('./recipe.repository');

async function getRecipes(page, limit, searchQuery) {
  const totalRecipes = await recipeRepository.getRecipesCount(searchQuery);
  const recipes = await recipeRepository.getRecipes(page, limit, searchQuery);

  return { totalRecipes, recipes };
}

async function getRecipeById(recipeId) {
  return recipeRepository.getRecipeById(recipeId);
}

module.exports = {
  getRecipes,
  getRecipeById,
};

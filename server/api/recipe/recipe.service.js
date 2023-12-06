const recipeRepository = require('./recipe.repository');

async function getRecipes(page, limit, subcategoryId) {
  const dbRecipes = await recipeRepository.getRecipes(
    page,
    limit,
    subcategoryId
  );

  //   const recipes =
  return dbRecipes;
}

module.exports = {
  getRecipes,
};

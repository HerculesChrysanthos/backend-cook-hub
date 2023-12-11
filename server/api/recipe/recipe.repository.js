const Recipe = require('./recipe.model');

async function getRecipes(page, limit, query) {
  return Recipe.find(query)
    .populate('user', 'name surname')
    .populate('category', 'name')
    .populate('subcategory', 'name')
    .populate('keywords', 'name')
    .skip(page)
    .limit(limit)
    .lean()
    .exec();
}

async function getRecipeById(recipeId) {
  return (
    Recipe.findById(recipeId)
      .populate('user', 'name surname')
      .populate('category', 'name')
      .populate('subcategory', 'name')
      //.populate('keywords', 'name')
      .exec()
  );
}

async function getRecipesCount(query) {
  return Recipe.countDocuments(query);
}

module.exports = {
  //getRecipesBySubcategoryId,
  getRecipes,
  getRecipeById,
  getRecipesCount,
};

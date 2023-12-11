const Recipe = require('./recipe.model');

async function getRecipes(page, limit, search) {
  return Recipe.find(search)
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
module.exports = {
  //getRecipesBySubcategoryId,
  getRecipes,
  getRecipeById,
};

const Recipe = require('./recipe.model');

async function getRecipes(page, limit, subcategoryId) {
  const query = subcategoryId ? { subcategoryId } : {};

  return Recipe.find(query)
    .populate('user', 'name surname')
    .populate('categories', 'name')
    .populate('subcategories', 'name')
    .populate('keywords', 'name')
    .skip(page)
    .limit(limit)
    .lean()
    .exec();
}

module.exports = {
  //getRecipesBySubcategoryId,
  getRecipes,
};

const Recipe = require('./recipe.model');

// TODO returns only specific fields
async function getRecipes(page, limit, query) {
  return Recipe.find(query)
    .sort({ createdAt: -1 })
    .populate('user', 'name surname')
    .populate('category', 'name')
    .populate('subcategory', 'name')
    .populate('tags', 'name')
    .skip(page * limit)
    .limit(limit)
    .lean()
    .exec();
}

async function getRecipeById(recipeId) {
  return Recipe.findById(recipeId)
    .populate('user', 'name surname')
    .populate('category', 'name')
    .populate('subcategory', 'name')
    .populate('tags', 'name')
    .exec();
}

async function getRecipesCount(query) {
  return Recipe.countDocuments(query);
}

async function createRecipe(recipe) {
  return Recipe.create(recipe);
}

module.exports = {
  getRecipes,
  getRecipeById,
  getRecipesCount,
  createRecipe,
};

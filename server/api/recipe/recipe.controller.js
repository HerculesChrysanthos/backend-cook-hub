const recipeService = require('./recipe.service');

async function getRecipes(req, res, next) {
  try {
    const page = req.query.page || 0;
    const limit = req.query.limit || 9;

    const categoryId = req.query.categoryId;
    const subcategoryId = req.query.subcategoryId;

    const searchQuery = {};

    if (categoryId) {
      searchQuery.category = categoryId;
    }

    if (subcategoryId) {
      searchQuery.subcategory = subcategoryId;
    }

    const recipes = await recipeService.getRecipes(page, limit, searchQuery);

    return res.status(200).json(recipes);
  } catch (error) {
    return next(error);
  }
}

async function getRecipeById(req, res, next) {
  try {
    const recipeId = req.params.recipeId;

    const recipe = await recipeService.getRecipeById(recipeId);

    return res.status(200).json(recipe);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getRecipes,
  getRecipeById,
};

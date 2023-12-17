const recipeRepository = require('../api/recipe/recipe.repository');
const recipeHelper = require('../api/recipe/recipe.helper');

async function hasRecipeAccess(req, res, next) {
  try {
    const recipeId = req.params.recipeId;

    if (!recipeHelper.isValidObjectId(recipeId)) {
      throw new Error('Recipe not found');
    }

    const recipe = await recipeRepository.getRecipeById(recipeId);
    if (!recipe) {
      throw new Error('Recipe not found');
    }

    if (recipe.user._id.toString() !== req.user.userId) {
      throw new Error('You have not the permission to access this');
    }

    return next();
  } catch (error) {
    if (error.message === 'Recipe not found') {
      error.status = 404;
    }

    if (error.message === 'You have not the permission to access this') {
      error.status = 403;
    }

    return next(error);
  }
}

module.exports = hasRecipeAccess;

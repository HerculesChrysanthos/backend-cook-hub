const recipeRepository = require('../api/recipe/recipe.repository');

async function hasRecipeAccess(req, res, next) {
  try {
    // const recipeId = parseInt(req.params.recipeId);

    console.log();
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

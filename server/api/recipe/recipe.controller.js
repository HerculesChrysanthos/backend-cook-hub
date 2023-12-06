const recipeService = require('./recipe.service');

async function getRecipes(req, res, next) {
  try {
    const page = req.query.page || 0;
    const limit = req.query.limit || 9;
    const subcategoryId = req.query.subcategoryId;

    // if (subcategoryId) {
    //   const recipesBySubcategoryId =
    //     await recipeService.getRecipesBySubcategoryId(
    //       page,
    //       limit,
    //       subcategoryId
    //     );

    //   return res.status(200).json(recipesBySubcategoryId);
    // }

    const recipes = await recipeService.getRecipes(page, limit, subcategoryId);

    return res.status(200).json(recipes);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getRecipes,
};

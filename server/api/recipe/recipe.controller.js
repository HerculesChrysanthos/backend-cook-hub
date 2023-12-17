const recipeService = require('./recipe.service');

async function getRecipes(req, res, next) {
  try {
    const page = req.query.page || 0;
    const limit = req.query.limit || 9;

    const categoryId = req.query.categoryId;
    const subcategoryId = req.query.subcategoryId;
    const tagId = req.query.tagId;

    const searchQuery = {};

    if (categoryId) {
      searchQuery.category = categoryId;
    }

    if (subcategoryId) {
      searchQuery.subcategory = subcategoryId;
    }

    if (tagId) {
      searchQuery.tags = tagId;
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
    console.log(`error: ${error}`);

    if (error.toString().includes('not found')) {
      error.status = 404;
    }
    return next(error);
  }
}

async function getMyRecipes(req, res, next) {
  try {
    const user = req.user.userId;

    const page = req.query.page || 0;
    const limit = req.query.limit || 9;

    const recipes = await recipeService.getRecipes(page, limit, { user });

    return res.status(200).json(recipes);
  } catch (error) {
    return next(error);
  }
}

// async function editRecipe(req, res, next) {
//   try {
//     return res.status(200).json({});
//   } catch (error) {
//     return next(error);
//   }
// try {
// } catch (error) {} // }

async function createRecipe(req, res, next) {
  try {
    const recipe = req.body;
    console.log('recipe_body ', recipe);
    recipe.user = req.user.userId;
    const createdRecipe = await recipeService.createRecipe(
      req.body,
      req.files[0]
    );
    return res.status(201).json(createdRecipe);
  } catch (error) {
    console.log(`error: ${error}`);

    if (error.toString().includes('not found')) {
      error.status = 404;
    }

    return next(error);
  }
}

async function deleteRecipeById(req, res, next) {
  try {
    const recipeId = req.params.recipeId;

    await recipeService.deleteRecipeById(recipeId);

    console.log(`${recipeId} deleted`);
    return res.status(200).json({});
  } catch (error) {
    console.log(`error: ${error}`);

    if (error.toString().includes('not found')) {
      error.status = 404;
    }
    return next(error);
  }
}

module.exports = {
  getRecipes,
  getRecipeById,
  getMyRecipes,
  createRecipe,
  deleteRecipeById,
};

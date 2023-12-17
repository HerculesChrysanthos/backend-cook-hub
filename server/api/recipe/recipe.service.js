const recipeRepository = require('./recipe.repository');
const sharpHelper = require('../../helpers/sharp.helper');
const imagekitClient = require('../../clients/imagekit-client');
const recipeHelper = require('./recipe.helper');
const categoryService = require('../category/category.service');
const subcategoryService = require('../subcategory/subcategory.service');
const tagService = require('../tag/tag.service');

async function getRecipes(page, limit, searchQuery) {
  const totalRecipes = await recipeRepository.getRecipesCount(searchQuery);
  const recipes = await recipeRepository.getRecipes(page, limit, searchQuery);

  return { totalRecipes, recipes };
}

async function getRecipeById(recipeId) {
  if (!recipeHelper.isValidObjectId(recipeId)) {
    throw new Error('Recipe not found');
  }
  const recipe = await recipeRepository.getRecipeById(recipeId);

  if (!recipe) {
    throw new Error('Recipe not found');
  }

  return recipe;
}

async function createRecipe(recipe, image) {
  const category = await categoryService.checkIfCategoryIdExists(
    recipe.category
  );

  if (!category) {
    throw new Error('Category not found');
  }

  const subcategory = await subcategoryService.checkIfSubategoryIdExists(
    recipe.subcategory
  );

  if (!subcategory) {
    throw new Error('Subcategory not found');
  }

  const tags = await tagService.getTagsByIds(recipe.tags);

  if (recipe.tags.length !== tags.length) {
    throw new Error('Tags not found');
  }
  console.log('image_before ', image.originalname);

  image.originalname = image.originalname.replace(/[^a-zA-Z0-9.]/g, '_');

  console.log('image_after ', image.originalname);

  const imageNames = recipeHelper.prepareImageNames(
    image.originalname,
    recipe.user
  );

  recipeHelper.addImagesToRecipe(recipe, imageNames);

  await recipeHelper.resizeAndUploadImages(image.buffer, imageNames);

  return recipeRepository.createRecipe(recipe);
}

async function editRecipe(recipeId, recipe, image) {
  const category = await categoryService.checkIfCategoryIdExists(
    recipe.category
  );

  if (!category) {
    throw new Error('Category not found');
  }

  const subcategory = await subcategoryService.checkIfSubategoryIdExists(
    recipe.subcategory
  );

  if (!subcategory) {
    throw new Error('Subcategory not found');
  }

  const tags = await tagService.getTagsByIds(recipe.tags);

  if (recipe.tags.length !== tags.length) {
    throw new Error('Tags not found');
  }

  if (image) {
    image.originalname = image.originalname.replace(/[^a-zA-Z0-9.]/g, '_');

    console.log('image_after ', image.originalname);

    const imageNames = recipeHelper.prepareImageNames(
      image.originalname,
      recipe.user
    );

    recipeHelper.addImagesToRecipe(recipe, imageNames);

    await recipeHelper.resizeAndUploadImages(image.buffer, imageNames);
  }

  return recipeRepository.editRecipe(recipeId, recipe);
}

async function deleteRecipeById(recipeId) {
  const deletedRecipe = await recipeRepository.deleteRecipeById(recipeId);

  if (!deletedRecipe) {
    throw new Error('Recipe not found');
  }
}

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  editRecipe,
  deleteRecipeById,
};

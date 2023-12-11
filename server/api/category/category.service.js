const categoryRepository = require('./category.repository');
const subcategoryRepository = require('../subcategory/subcategory.repository');

async function getAllCategories() {
  return categoryRepository.getAllCategories();
}

async function getCategoriesWithSubcategories() {
  return subcategoryRepository.getCategoriesWithSubcategories();
}

module.exports = {
  getAllCategories,
  getCategoriesWithSubcategories,
};

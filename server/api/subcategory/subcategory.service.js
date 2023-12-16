const subcategoryRepository = require('./subcategory.repository');

async function getSubcategoriesByCategoryId(categoryId) {
  return subcategoryRepository.getSubcategoriesByCategoryId(categoryId);
}

async function checkIfSubategoryIdExists(id) {
  return subcategoryRepository.checkIfSubcategoryIdExists(id);
}

module.exports = {
  getSubcategoriesByCategoryId,
  checkIfSubategoryIdExists,
};

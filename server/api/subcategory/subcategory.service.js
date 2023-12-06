const subcategoryRepository = require('./subcategory.repository');

async function getSubcategoriesByCategoryId(categoryId) {
  return subcategoryRepository.getSubcategoriesByCategoryId(categoryId);
}

module.exports = {
  getSubcategoriesByCategoryId,
};

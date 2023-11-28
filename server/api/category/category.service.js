const categoryRepository = require('./category.repository');

async function getAllCategories() {
  return categoryRepository.getAllCategories();
}

module.exports = {
  getAllCategories,
};

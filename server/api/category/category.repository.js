const Category = require('./category.model');

async function getAllCategories() {
  return Category.find({});
}

async function checkIfCategoryIdExists(id) {
  return Category.exists({ _id: id });
}

module.exports = {
  getAllCategories,
  checkIfCategoryIdExists,
};

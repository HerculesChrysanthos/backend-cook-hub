const Category = require('./category.model');

async function getAllCategories() {
  return Category.find({});
}

module.exports = {
  getAllCategories,
};

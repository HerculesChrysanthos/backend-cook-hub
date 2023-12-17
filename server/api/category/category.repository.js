const Category = require('./category.model');

async function getAllCategories() {
  return Category.find({});
}

async function checkIfCategoryIdExists(id) {
  return Category.exists({ _id: id });
}

async function getCategoriesWithSubcategories() {
  return Category.aggregate([
    {
      $lookup: {
        from: 'subcategories',
        localField: '_id',
        foreignField: 'category',
        as: 'subcategories',
      },
    },
    {
      $sort: {
        name: 1,
      },
    },
  ]).exec();
}

module.exports = {
  getAllCategories,
  checkIfCategoryIdExists,
  getCategoriesWithSubcategories,
};

const mongoose = require('mongoose');
const Subcategory = require('./subcategory.model');

async function getSubcategoriesByCategoryId(categoryId) {
  return Subcategory.find({ _id: new mongoose.Types.ObjectId(categoryId) });
}

async function getCategoriesWithSubcategories() {
  return Subcategory.aggregate([
    {
      $lookup: {
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'category',
      },
    },
    {
      $unwind: '$category',
    },
    {
      $group: {
        _id: '$category._id',
        category: { $first: '$category' },
        subcategories: { $push: '$$ROOT' },
      },
    },
    {
      $project: {
        _id: 0,
        category: 1,
        subcategories: {
          $map: {
            input: '$subcategories',
            as: 'subcategory',
            in: {
              _id: '$$subcategory._id',
              name: '$$subcategory.name',
            },
          },
        },
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
  getSubcategoriesByCategoryId,
  getCategoriesWithSubcategories,
};

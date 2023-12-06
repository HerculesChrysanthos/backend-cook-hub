const mongoose = require('mongoose');
const Subcategory = require('./subcategory.model');

async function getSubcategoriesByCategoryId(categoryId) {
  return Subcategory.find({ _id: mongoose.Types.ObjectId(categoryId) });
}

// async function getSubcategoriesWithCategories() {
//   return Subcategory.aggregate([
//     {
//       $lookup: {
//         from: 'categories',
//         localField: 'category',
//         foreignField: '_id',
//         as: 'category',
//       },
//     },
//     {
//       $unwind: '$category',
//     },
//     {
//       $group: {
//         _id: '$category._id',
//         category: { $first: '$category' },
//         subcategories: { $push: '$$ROOT' },
//       },
//     },
//     {
//       $project: {
//         _id: 0,
//         category: 1,
//         subcategories: {
//           $map: {
//             input: '$subcategories',
//             as: 'subcategory',
//             in: {
//               _id: '$$subcategory._id',
//               name: '$$subcategory.name',
//             },
//           },
//         },
//       },
//     },
//   ]).exec();
// }

module.exports = {
  getSubcategoriesByCategoryId,
};

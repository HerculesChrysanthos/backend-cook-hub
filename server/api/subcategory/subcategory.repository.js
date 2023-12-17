const mongoose = require('mongoose');
const Subcategory = require('./subcategory.model');

async function getSubcategoriesByCategoryId(categoryId) {
  return Subcategory.find({ _id: new mongoose.Types.ObjectId(categoryId) });
}

async function checkIfSubcategoryIdExists(id) {
  return Subcategory.exists({ _id: id });
}

module.exports = {
  getSubcategoriesByCategoryId,
  checkIfSubcategoryIdExists,
};

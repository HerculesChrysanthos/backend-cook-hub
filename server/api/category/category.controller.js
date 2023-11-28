const categoryService = require('./category.service');

async function getAllCategories(req, res, next) {
  try {
    const categories = await categoryService.getAllCategories();

    res.status(200).json(categories);
  } catch (error) {
    console.log(`error: ${error}`);
    return next(error);
  }
}

module.exports = {
  getAllCategories,
};

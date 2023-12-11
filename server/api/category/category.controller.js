const categoryService = require('./category.service');

async function getAllCategories(req, res, next) {
  try {
    const include = req.query.include;
    if (include && include === 'subcategories') {
      const categoriesWithSubcategories =
        await categoryService.getCategoriesWithSubcategories();

      return res.status(200).json(categoriesWithSubcategories);
    }

    const categories = await categoryService.getAllCategories();

    return res.status(200).json(categories);
  } catch (error) {
    console.log(`error: ${error}`);
    return next(error);
  }
}

module.exports = {
  getAllCategories,
};

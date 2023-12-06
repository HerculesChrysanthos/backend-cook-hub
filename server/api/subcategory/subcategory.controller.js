const subcategoryService = require('./subcategory.service');

async function getSubcategoriesByCategoryId(req, res, next) {
  try {
    const categoryId = req.params.categoryId;
    const subcategories = await subcategoryService.getSubcategoriesByCategoryId(
      categoryId
    );
    return res.status(200).json(subcategories);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getSubcategoriesByCategoryId,
};

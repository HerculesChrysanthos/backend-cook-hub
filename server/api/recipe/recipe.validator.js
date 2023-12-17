const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const createRecipeSchema = Joi.object({
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    instructions: Joi.string().required(),
    preparationTime: Joi.number().integer().required(),
    cookingTime: Joi.number().integer().required(),
    servings: Joi.number().integer().required(),
    category: Joi.objectId().required(),
    subcategory: Joi.objectId().required(),
    tags: Joi.array().items(Joi.objectId().required()).required(),
    // ingredients: Joi.array()
    //   .items({
    //     name: Joi.string().required(),
    //   })
    //   .required(),
    ingredients: Joi.array().items(Joi.string().required()).required(),
  }).required(),
  image: Joi.array().items(Joi.binary().required()).required(),
});

module.exports = {
  createRecipeSchema,
};

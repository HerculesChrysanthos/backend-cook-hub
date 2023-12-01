const mongoose = require('mongoose');
const { MEASURMENTS } = require('../constants');

const recipeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    recipeId: {
      type: Number,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    previewImage: {
      type: String,
    },
    mainImage: {
      type: String,
    },
    preparationTime: {
      type: Number,
      required: true,
    },
    cookingTime: {
      type: Number,
      required: true,
    },
    servings: {
      type: Number,
      required: true,
      min: 1,
    },
    categories: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
      },
    ],
    subCategories: [
      {
        subCategory: {
          type: mongoose.Types.ObjectId,
          ref: 'SubCategory',
        },
      },
    ],
    keywords: [
      {
        keyword: {
          type: mongoose.Types.ObjectId,
          ref: 'Keyword',
        },
      },
    ],
    ingredients: [
      {
        ingredient: {
          type: mongoose.Types.ObjectId,
          ref: 'Ingredient',
        },
        quantity: {
          type: Number,
          min: 0,
        },
        measurmentType: {
          type: String,
          enum: MEASURMENTS,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Recipe', recipeSchema);

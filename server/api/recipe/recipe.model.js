const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructions: {
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
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    subcategory: {
      type: Schema.Types.ObjectId,
      ref: 'Subcategory',
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Recipe', recipeSchema);

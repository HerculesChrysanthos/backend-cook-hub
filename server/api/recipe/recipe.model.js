const mongoose = require('mongoose');
const { MEASURMENTS } = require('../constants');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const recipeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    friendlyId: {
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
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
    subcategory: {
      type: mongoose.Types.ObjectId,
      ref: 'Subcategory',
    },
    tags: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    ingredients: [
      {
        // ingredient: {
        //   type: mongoose.Types.ObjectId,
        //   ref: 'Ingredient',
        // },
        name: {
          type: String,
          required: true,
        },
        // quantity: {
        //   type: Number,
        //   min: 0,
        // },
        // measurmentType: {
        //   type: String,
        //   enum: MEASURMENTS,
        // },
      },
    ],
  },
  {
    timestamps: true,
  }
);

recipeSchema.plugin(AutoIncrement, {
  inc_field: 'friendlyId',
  id: 'Recipe',
});

module.exports = mongoose.model('Recipe', recipeSchema);

const mongoose = require('mongoose');
const { MEASURMENTS } = require('../constants');
//const AutoIncrementFactory = require('mongoose-sequence');
const Schema = mongoose.Schema;

// autoIncrement.initialize(mongoose.connection);

//const AutoIncrement = AutoIncrementFactory(mongoose.connection);
const recipeSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    // friendlyId: {
    //   type: Number,
    //   unique: true,
    // },
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
    // ingredients: [
    //   {
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
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

// recipeSchema.plugin(AutoIncrement, {
//   inc_field: 'friendlyId',
//   id: 'Recipe',
// });

// recipeSchema.plugin(autoIncrement, { field: 'friendlyId' });

module.exports = mongoose.model('Recipe', recipeSchema);

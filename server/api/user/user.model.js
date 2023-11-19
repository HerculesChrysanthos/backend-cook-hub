const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: String,
    },
    email: {
      type: String,
      required: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    likedRecipesCount: {
      type: Number,
      min: 0,
      default: 0,
    },
    createdRecipesCount: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const subcategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'category',
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model('Subcategory', subcategorySchema);

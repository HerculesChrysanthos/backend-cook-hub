const mongoose = require('mongoose');
const Tag = require('./tag.model');

async function getTags() {
  return Tag.find({}).lean().exec();
}

async function getTagsByIds(ids) {
  const objectIds = ids.map((id) => new mongoose.Types.ObjectId(id));
  return Tag.find({ _id: { $in: objectIds } });
}

module.exports = {
  getTags,
  getTagsByIds,
};

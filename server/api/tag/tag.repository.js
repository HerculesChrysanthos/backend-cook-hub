const mongoose = require('mongoose');
const Tag = require('./tag.model');

async function getTags() {
  return Tag.find({}).lean().exec();
}

module.exports = {
  getTags,
};

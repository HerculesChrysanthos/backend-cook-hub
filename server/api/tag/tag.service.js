const tagRepository = require('./tag.repository');

async function getTags() {
  return tagRepository.getTags();
}

async function getTagsByIds(ids) {
  return tagRepository.getTagsByIds(ids);
}

module.exports = {
  getTags,
  getTagsByIds,
};

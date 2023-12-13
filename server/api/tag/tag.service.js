const tagRepository = require('./tag.repository');

async function getTags() {
  return tagRepository.getTags();
}

module.exports = {
  getTags,
};

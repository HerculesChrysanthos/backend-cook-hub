const tagService = require('./tag.service');

async function getTags(req, res, next) {
  try {
    const tags = await tagService.getTags();
    return res.status(200).json(tags);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getTags,
};

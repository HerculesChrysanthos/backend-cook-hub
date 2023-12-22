const mongoose = require('mongoose');
const sharpHelper = require('../../helpers/sharp.helper');
const imagekitClient = require('../../clients/imagekit-client');

function prepareImageNames(name, user) {
  return [`${Date.now()}${user}-1${name}`, `${Date.now()}${user}-2${name}`];
}

function addImagesToRecipe(recipe, imageNames) {
  recipe.previewImage = `https://ik.imagekit.io/cookhub/${imageNames[0]}`;
  recipe.mainImage = `https://ik.imagekit.io/cookhub/${imageNames[1]}`;
}

async function resizeAndUploadImages(buffer, names) {
  const dimensions = [
    { width: 150, height: 150 },
    { width: 600, height: 400 },
  ];
  const uploadPromises = names.map(async (name, index) => {
    const resizedImage = await sharpHelper.resizeImage(
      buffer,
      dimensions[index]
    );

    // Return the promise of the uploadImage call
    return imagekitClient.uploadImage(resizedImage, name);
  });

  // Use Promise.all to wait for all promises to resolve
  await Promise.all(uploadPromises);
}

function isValidObjectId(recipeId) {
  return mongoose.Types.ObjectId.isValid(recipeId);
}

module.exports = {
  prepareImageNames,
  addImagesToRecipe,
  resizeAndUploadImages,
  isValidObjectId,
};

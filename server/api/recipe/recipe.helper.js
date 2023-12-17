const sharpHelper = require('../../helpers/sharp.helper');
const imagekitClient = require('../../clients/imagekit-client');

function prepareImageNames(name, user) {
  //console.log('image_before ', name);
  //const nameWithUnderscores = name.replace(/\s/g, '_');

  //console.log('image_after ', nameWithUnderscores);
  return [
    `${Date.now()}${user}-1${nameWithUnderscores}`,
    `${Date.now()}${user}-2${nameWithUnderscores}`,
  ];
}

function addImagesToRecipe(recipe, imageNames) {
  recipe.previewImage = `https://ik.imagekit.io/cookhub/${imageNames[0]}`;
  recipe.mainImage = `https://ik.imagekit.io/cookhub/${imageNames[1]}`;
}

function resizeAndUploadImages(buffer, names) {
  const dimensions = [
    { width: 150, height: 150 },
    { width: 600, height: 400 },
  ];

  names.forEach(async (name, index) => {
    const resizedImage = await sharpHelper.resizeImage(
      buffer,
      dimensions[index]
    );

    imagekitClient.uploadImage(resizedImage, name);
  });
}

module.exports = {
  prepareImageNames,
  addImagesToRecipe,
  resizeAndUploadImages,
};

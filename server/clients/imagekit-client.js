const ImageKit = require('imagekit');
require('dotenv').config();

async function uploadImage(image) {
  try {
    var imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: 'https://ik.imagekit.io/cookhub/',
    });

    const imageUploaded = await imagekit.upload(
      {
        file: image.buffer,
        fileName: image.originalname,
      },
      function (error, result) {
        if (error) console.log(error);
        else console.log(result);
      }
    );

    return imageUploaded.url;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  uploadImage,
};

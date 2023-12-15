const ImageKit = require('imagekit');
require('dotenv').config();

async function uploadImage(buffer, name) {
  try {
    const imagekit = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: 'https://ik.imagekit.io/cookhub/',
    });

    imagekit.upload(
      {
        file: buffer,
        fileName: name,
        useUniqueFileName: false,
      },
      function (error, result) {
        if (error) console.log(error);
        else console.log(result);
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  uploadImage,
};

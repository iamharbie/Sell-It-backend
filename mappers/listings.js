const config = require("config");
const cloudinary = require("cloudinary").v2;

const mapper = (listing) => {
  const baseUrl = config.get("assetsBaseUrl");
  const mapImage = (image) => ({
    // url:  `${baseUrl}${image.fileName}_full.jpg`,
    // thumbnailUrl: `${baseUrl}${image.fileName}_thumb.jpg`,
    url: cloudinary.url(image.fileName, { width: 2000, quality: 50 }),
    thumbnailUrl: cloudinary.url(image.fileName, {
      width: 100,
      quality: 30,
    }),
  });

  listing.images = listing.images.map(mapImage);

  return listing;
};

module.exports = mapper;

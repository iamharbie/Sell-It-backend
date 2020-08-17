const { config } = require("cloudinary").v2;
const cloudinaryConfig = () =>
  config({
    cloud_name: process.env.CLOUD_CLOUR_NAME,
    api_key: process.env.ClOUD_API_KEY,
    api_secret: process.env.sWD9qPJpYtPYEmrC0EpD9nC1Gbg,
  });
module.exports = cloudinaryConfig;
